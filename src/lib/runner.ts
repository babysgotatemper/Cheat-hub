import vm from 'vm'
import { transform } from 'sucrase'

type Language = 'javascript' | 'typescript'

interface TestCase {
  input: string
  expected: string
}

interface RunResult {
  passed: boolean
  input: string
  expected: string
  actual?: string
  error?: string
}

const TIMEOUT_MS = 5000

export async function runCode(
  code: string,
  language: Language,
  testCases: TestCase[],
): Promise<RunResult[]> {
  // TypeScript is transpiled to plain JS once; the result runs in a Node `vm`
  // context per test case. This avoids spawning child processes (which do not
  // work on Vercel serverless).
  let jsCode = code
  if (language === 'typescript') {
    try {
      jsCode = transform(code, { transforms: ['typescript'] }).code
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error)
      return testCases.map((tc) => ({
        passed: false,
        input: tc.input,
        expected: tc.expected,
        error: `Compilation error: ${msg.split('\n')[0]}`,
      }))
    }
  }

  const results: RunResult[] = []

  for (const testCase of testCases) {
    results.push(runSingle(jsCode, testCase))
  }

  return results
}

function runSingle(jsCode: string, testCase: TestCase): RunResult {
  let inputObj: string
  try {
    inputObj = JSON.stringify(JSON.parse(testCase.input))
  } catch {
    return {
      passed: false,
      input: testCase.input,
      expected: testCase.expected,
      error: 'Invalid JSON input',
    }
  }

  // Extract function name from code: var/const/function name
  const fnMatch = jsCode.match(/(?:var|const|function)\s+(\w+)\s*[=\s(]/)
  const fnName = fnMatch?.[1] || 'solution'

  const wrapper = `
${jsCode}

(function () {
  const input = ${inputObj};
  if (typeof ${fnName} !== 'function') {
    __error = 'Function ${fnName} not found';
    return;
  }
  try {
    const result = Array.isArray(input) ? ${fnName}(...input) : ${fnName}(input);
    __result = JSON.stringify(result);
  } catch (e) {
    __error = e instanceof Error ? e.message : String(e);
  }
})();
`

  const sandbox: Record<string, unknown> = {
    __result: undefined,
    __error: undefined,
    console: { log: () => {}, error: () => {}, warn: () => {}, info: () => {} },
  }

  try {
    const script = new vm.Script(wrapper)
    const context = vm.createContext(sandbox)
    script.runInContext(context, { timeout: TIMEOUT_MS })
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error)
    return {
      passed: false,
      input: testCase.input,
      expected: testCase.expected,
      error: msg.split('\n')[0],
    }
  }

  if (sandbox.__error !== undefined) {
    return {
      passed: false,
      input: testCase.input,
      expected: testCase.expected,
      error: String(sandbox.__error),
    }
  }

  const actual = String(sandbox.__result ?? '').trim()
  const expected = testCase.expected.trim()

  return {
    passed: actual === expected,
    input: testCase.input,
    expected,
    actual,
  }
}
