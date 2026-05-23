import { execSync } from 'child_process'
import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'

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

export async function runCode(
  code: string,
  language: Language,
  testCases: TestCase[],
): Promise<RunResult[]> {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'leetcode-'))

  try {
    const results: RunResult[] = []

    for (const testCase of testCases) {
      try {
        // Create a wrapper that includes the user code and test execution
        const wrapper = createWrapper(code, testCase.input, language)

        // Write to temp file
        const filename = path.join(tmpDir, `test.${language === 'typescript' ? 'ts' : 'js'}`)
        fs.writeFileSync(filename, wrapper)

        // Execute
        let output: string
        if (language === 'typescript') {
          output = execSync(`npx tsx "${filename}"`, {
            timeout: 5000,
            encoding: 'utf-8',
          })
        } else {
          output = execSync(`node "${filename}"`, {
            timeout: 5000,
            encoding: 'utf-8',
          })
        }

        const actual = output.trim()
        const expected = testCase.expected.trim()
        const passed = actual === expected

        results.push({
          passed,
          input: testCase.input,
          expected,
          actual,
        })
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error)
        results.push({
          passed: false,
          input: testCase.input,
          expected: testCase.expected,
          error: errorMsg.split('\n')[0], // Get first line of error
        })
      }
    }

    return results
  } finally {
    // Cleanup
    fs.rmSync(tmpDir, { recursive: true, force: true })
  }
}

function createWrapper(code: string, input: string, language: Language): string {
  const inputObj = JSON.stringify(JSON.parse(input))

  // Extract function name from code: var/const/function name
  const fnMatch = code.match(/(?:var|const|function)\s+(\w+)\s*[=\s(]/)
  const fnName = fnMatch?.[1] || 'solution'

  if (language === 'typescript') {
    return `
${code}

const input = ${inputObj};
try {
  if (typeof ${fnName} === 'function') {
    const result = Array.isArray(input) ? ${fnName}(...input) : ${fnName}(input);
    console.log(JSON.stringify(result));
  } else {
    console.error('Function ${fnName} not found');
    process.exit(1);
  }
} catch (e) {
  console.error(e instanceof Error ? e.message : String(e));
  process.exit(1);
}
`
  } else {
    return `
${code}

const input = ${inputObj};
try {
  if (typeof ${fnName} === 'function') {
    const result = Array.isArray(input) ? ${fnName}(...input) : ${fnName}(input);
    console.log(JSON.stringify(result));
  } else {
    console.error('Function ${fnName} not found');
    process.exit(1);
  }
} catch (e) {
  console.error(e instanceof Error ? e.message : String(e));
  process.exit(1);
}
`
  }
}
