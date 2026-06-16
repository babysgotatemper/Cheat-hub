// AUTO-GENERATED from CheetSheet/leetcode/{index,cheatsheet}.html.
// Hand-edit with care — re-running the parser script will overwrite this file.
import type { LeetcodeData } from './types'

export const leetcodeData: LeetcodeData = {
  "sections": [
    {
      "id": "arrays-hashing",
      "index": 1,
      "emoji": "1️⃣",
      "title": "Arrays & Hashing",
      "count": 14,
      "tasks": [
        {
          "id": "contains-duplicate",
          "number": 217,
          "title": "Contains Duplicate",
          "difficulty": "Easy",
          "hint": "Set — додавай і перевіряй наявність. Знайшов існуючий → true.",
          "description": "Чи є в масиві дублікати?",
          "complexity": "Time O(n), Space O(n)",
          "code": "function containsDuplicate(nums: number[]): boolean {\n  const seen = new Set<number>();\n  for (const num of nums) {\n    if (seen.has(num)) return true;\n    seen.add(num);\n  }\n  return false;\n}",
          "practiceSlug": "contains-duplicate"
        },
        {
          "id": "two-sum",
          "number": 1,
          "title": "Two Sum",
          "difficulty": "Easy",
          "hint": "HashMap зберігає value → index. Для кожного числа перевіряй target - num в мапі.",
          "description": "Дано масив nums і число target. Знайди два індекси, сума елементів яких = target.",
          "complexity": "Time O(n), Space O(n)",
          "code": "function twoSum(nums: number[], target: number): number[] {\n  const seen = new Map<number, number>();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (seen.has(complement)) return [seen.get(complement)!, i];\n    seen.set(nums[i], i);\n  }\n  return [];\n}",
          "practiceSlug": "two-sum"
        },
        {
          "id": "concatenation-of-array",
          "number": 1929,
          "title": "Concatenation of Array",
          "difficulty": "Easy",
          "hint": "[...arr, ...arr]. O(n)",
          "practiceSlug": "concatenation-of-array"
        },
        {
          "id": "replace-elements",
          "number": 1299,
          "title": "Replace Elements",
          "difficulty": "Easy",
          "hint": "Iterate right→left, track max. O(n)"
        },
        {
          "id": "is-subsequence",
          "number": 392,
          "title": "Is Subsequence",
          "difficulty": "Easy",
          "hint": "Two pointers. O(n)"
        },
        {
          "id": "longest-common-prefix",
          "number": 14,
          "title": "Longest Common Prefix",
          "difficulty": "Easy",
          "hint": "Vertical scan. O(n·m)",
          "practiceSlug": "longest-common-prefix"
        },
        {
          "id": "pascal-s-triangle",
          "number": 118,
          "title": "Pascal's Triangle",
          "difficulty": "Easy",
          "hint": "[1] + [prev[i-1]+prev[i]] + [1]. O(n²)"
        },
        {
          "id": "majority-element",
          "number": 169,
          "title": "Majority Element",
          "difficulty": "Easy",
          "hint": "Boyer-Moore voting. O(n)"
        },
        {
          "id": "valid-anagram",
          "number": 242,
          "title": "Valid Anagram",
          "difficulty": "Medium",
          "hint": "Підрахуй частоти символів. Один рядок +1, другий -1. Усі нулі → анаграма.",
          "description": "Чи два рядки — анаграми один одного?",
          "complexity": "Time O(n), Space O(1)",
          "code": "function isAnagram(s: string, t: string): boolean {\n  if (s.length !== t.length) return false;\n  const freq = new Map<string, number>();\n  for (const ch of s) freq.set(ch, (freq.get(ch) ?? 0) + 1);\n  for (const ch of t) {\n    if (!freq.has(ch)) return false;\n    freq.set(ch, freq.get(ch)! - 1);\n    if (freq.get(ch) === 0) freq.delete(ch);\n  }\n  return freq.size === 0;\n}"
        },
        {
          "id": "group-anagrams",
          "number": 49,
          "title": "Group Anagrams",
          "difficulty": "Medium",
          "hint": "Map: ключ = відсортований рядок (або підрахунок частот), значення = масив анаграм.",
          "description": "Згрупуй анаграми разом у вхідному масиві рядків.",
          "complexity": "Time O(n·k log k), Space O(n·k)",
          "code": "function groupAnagrams(strs: string[]): string[][] {\n  const map = new Map<string, string[]>();\n  for (const str of strs) {\n    const key = str.split('').sort().join('');\n    if (!map.has(key)) map.set(key, []);\n    map.get(key)!.push(str);\n  }\n  return Array.from(map.values());\n}",
          "practiceSlug": "group-anagrams"
        },
        {
          "id": "top-k-frequent",
          "number": 347,
          "title": "Top K Frequent",
          "difficulty": "Medium",
          "hint": "Підрахуй частоти → bucket sort за частотою (індекс = частота). Збирай з кінця. O(n) — швидше за heap.",
          "description": "Знайди k найчастіших елементів масиву.",
          "complexity": "Time O(n), Space O(n)",
          "code": "function topKFrequent(nums: number[], k: number): number[] {\n  const freq = new Map<number, number>();\n  for (const num of nums) freq.set(num, (freq.get(num) ?? 0) + 1);\n\n  const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);\n  freq.forEach((count, num) => buckets[count].push(num));\n\n  const result: number[] = [];\n  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {\n    result.push(...buckets[i]);\n  }\n  return result.slice(0, k);\n}"
        },
        {
          "id": "encode-decode-strings",
          "number": 271,
          "title": "Encode/Decode Strings",
          "difficulty": "Medium",
          "hint": "Prefix length + string. O(n)"
        },
        {
          "id": "product-except-self",
          "number": 238,
          "title": "Product Except Self",
          "difficulty": "Medium",
          "hint": "Prefix * suffix. O(n)"
        },
        {
          "id": "valid-sudoku",
          "number": 36,
          "title": "Valid Sudoku",
          "difficulty": "Medium",
          "hint": "HashSet per row/col/box. O(1)",
          "practiceSlug": "valid-sudoku"
        },
        {
          "id": "longest-consecutive",
          "number": 128,
          "title": "Longest Consecutive",
          "difficulty": "Medium",
          "hint": "Set усіх чисел. Для кожного перевір, чи num-1 НЕ в Set — це початок. Рахуй довжину вперед.",
          "description": "Знайди довжину найдовшої послідовності послідовних чисел (не обов'язково суцільної). За O(n).",
          "complexity": "Time O(n), Space O(n)",
          "code": "function longestConsecutive(nums: number[]): number {\n  const set = new Set(nums);\n  let longest = 0;\n\n  for (const num of set) {\n    if (!set.has(num - 1)) {\n      let current = num;\n      let streak = 1;\n      while (set.has(current + 1)) {\n        current++;\n        streak++;\n      }\n      longest = Math.max(longest, streak);\n    }\n  }\n  return longest;\n}"
        }
      ]
    },
    {
      "id": "two-pointers",
      "index": 2,
      "emoji": "2️⃣",
      "title": "Two Pointers",
      "count": 6,
      "tasks": [
        {
          "id": "valid-palindrome",
          "number": 125,
          "title": "Valid Palindrome",
          "difficulty": "Easy",
          "hint": "Two pointers з кінців. Пропускай не-alphanumeric. Порівнюй у нижньому регістрі.",
          "description": "Чи є рядок паліндромом? Враховуй тільки літери та цифри, ігноруй регістр.",
          "complexity": "Time O(n), Space O(1)",
          "code": "function isPalindrome(s: string): boolean {\n  let left = 0, right = s.length - 1;\n  const isAlnum = (c: string) => /[a-zA-Z0-9]/.test(c);\n  while (left < right) {\n    while (left < right && !isAlnum(s[left])) left++;\n    while (left < right && !isAlnum(s[right])) right--;\n    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;\n    left++; right--;\n  }\n  return true;\n}"
        },
        {
          "id": "valid-palindrome-ii",
          "number": 680,
          "title": "Valid Palindrome II",
          "difficulty": "Easy",
          "hint": "Two pointers; при mismatch спробуй пропустити лівий АБО правий і перевір решту.",
          "description": "Чи можна зробити рядок паліндромом, видаливши не більше 1 символу?",
          "complexity": "Time O(n), Space O(1)",
          "code": "function validPalindrome(s: string): boolean {\n  const isPal = (l: number, r: number): boolean => {\n    while (l < r) {\n      if (s[l] !== s[r]) return false;\n      l++; r--;\n    }\n    return true;\n  };\n  let left = 0, right = s.length - 1;\n  while (left < right) {\n    if (s[left] !== s[right]) {\n      return isPal(left + 1, right) || isPal(left, right - 1);\n    }\n    left++; right--;\n  }\n  return true;\n}"
        },
        {
          "id": "two-sum-ii-sorted",
          "number": 167,
          "title": "Two Sum II Sorted",
          "difficulty": "Medium",
          "hint": "l++/r-- по сумі. O(n)"
        },
        {
          "id": "3sum",
          "number": 15,
          "title": "3Sum",
          "difficulty": "Medium",
          "hint": "Sort + fix i + two pointers. O(n²)",
          "practiceSlug": "3sum"
        },
        {
          "id": "container-water",
          "number": 11,
          "title": "Container Water",
          "difficulty": "Medium",
          "hint": "Рухай менший pointer. O(n)"
        },
        {
          "id": "trapping-rain",
          "number": 42,
          "title": "Trapping Rain",
          "difficulty": "Hard",
          "hint": "leftMax/rightMax two pointers. O(n)"
        }
      ]
    },
    {
      "id": "sliding-window",
      "index": 3,
      "emoji": "3️⃣",
      "title": "Sliding Window",
      "count": 7,
      "tasks": [
        {
          "id": "best-time-to-buy-stock",
          "number": 121,
          "title": "Best Time to Buy Stock",
          "difficulty": "Easy",
          "hint": "Track min, max profit. O(n)"
        },
        {
          "id": "longest-substring-no-repeat",
          "number": 3,
          "title": "Longest Substring No Repeat",
          "difficulty": "Medium",
          "hint": "Set + shrink window. O(n)"
        },
        {
          "id": "char-replacement",
          "number": 424,
          "title": "Char Replacement",
          "difficulty": "Medium",
          "hint": "maxCount freq, shrink if needed. O(n)"
        },
        {
          "id": "permutation-in-string",
          "number": 567,
          "title": "Permutation in String",
          "difficulty": "Medium",
          "hint": "Fixed window, freq compare. O(n)"
        },
        {
          "id": "find-anagrams",
          "number": 438,
          "title": "Find Anagrams",
          "difficulty": "Medium",
          "hint": "Window + freq compare. O(n)"
        },
        {
          "id": "min-window-substring",
          "number": 76,
          "title": "Min Window Substring",
          "difficulty": "Hard",
          "hint": "Expand+shrink, track chars. O(n)"
        },
        {
          "id": "sliding-window-max",
          "number": 239,
          "title": "Sliding Window Max",
          "difficulty": "Hard",
          "hint": "Monotonic deque. O(n)"
        }
      ]
    },
    {
      "id": "stack",
      "index": 4,
      "emoji": "4️⃣",
      "title": "Stack",
      "count": 9,
      "tasks": [
        {
          "id": "valid-parentheses",
          "number": 20,
          "title": "Valid Parentheses",
          "difficulty": "Easy",
          "hint": "Push open, pop+check close. O(n)",
          "practiceSlug": "valid-parentheses"
        },
        {
          "id": "baseball-game",
          "number": 682,
          "title": "Baseball Game",
          "difficulty": "Easy",
          "hint": "Simulate stack. O(n)"
        },
        {
          "id": "min-stack",
          "number": 155,
          "title": "Min Stack",
          "difficulty": "Medium",
          "hint": "Parallel min stack. O(1)"
        },
        {
          "id": "eval-rpn",
          "number": 150,
          "title": "Eval RPN",
          "difficulty": "Medium",
          "hint": "Pop2, push result. O(n)"
        },
        {
          "id": "generate-parentheses",
          "number": 22,
          "title": "Generate Parentheses",
          "difficulty": "Medium",
          "hint": "Backtrack, open≤n, close≤open. O(4^n/√n)",
          "practiceSlug": "generate-parentheses"
        },
        {
          "id": "daily-temperatures",
          "number": 739,
          "title": "Daily Temperatures",
          "difficulty": "Medium",
          "hint": "Monotonic stack (decreasing). O(n)"
        },
        {
          "id": "car-fleet",
          "number": 853,
          "title": "Car Fleet",
          "difficulty": "Medium",
          "hint": "Sort desc, track speed. O(n log n)"
        },
        {
          "id": "asteroid-collision",
          "number": 735,
          "title": "Asteroid Collision",
          "difficulty": "Medium",
          "hint": "Resolve collisions. O(n)"
        },
        {
          "id": "largest-histogram",
          "number": 84,
          "title": "Largest Histogram",
          "difficulty": "Hard",
          "hint": "Monotonic stack. O(n)"
        }
      ]
    },
    {
      "id": "binary-search",
      "index": 5,
      "emoji": "5️⃣",
      "title": "Binary Search",
      "count": 9,
      "tasks": [
        {
          "id": "binary-search",
          "number": 704,
          "title": "Binary Search",
          "difficulty": "Easy",
          "hint": "Classic. O(log n)"
        },
        {
          "id": "search-insert-position",
          "number": 35,
          "title": "Search Insert Position",
          "difficulty": "Easy",
          "hint": "Return lo. O(log n)",
          "practiceSlug": "search-insert-position"
        },
        {
          "id": "search-2d-matrix",
          "number": 74,
          "title": "Search 2D Matrix",
          "difficulty": "Medium",
          "hint": "Flatten index. O(log mn)"
        },
        {
          "id": "koko-eating-bananas",
          "number": 875,
          "title": "Koko Eating Bananas",
          "difficulty": "Medium",
          "hint": "BS on speed [1..max]. O(n log max)"
        },
        {
          "id": "find-min-rotated",
          "number": 153,
          "title": "Find Min Rotated",
          "difficulty": "Medium",
          "hint": "Compare mid vs right. O(log n)"
        },
        {
          "id": "search-rotated-sorted",
          "number": 33,
          "title": "Search Rotated Sorted",
          "difficulty": "Medium",
          "hint": "Which half sorted? O(log n)"
        },
        {
          "id": "time-based-kv-store",
          "number": 981,
          "title": "Time Based KV Store",
          "difficulty": "Medium",
          "hint": "BS on timestamps. O(log n)"
        },
        {
          "id": "ship-days",
          "number": 1011,
          "title": "Ship Days",
          "difficulty": "Medium",
          "hint": "BS capacity [max..sum]. O(n log sum)"
        },
        {
          "id": "median-two-sorted-arrays",
          "number": 4,
          "title": "Median Two Sorted Arrays",
          "difficulty": "Hard",
          "hint": "BS on smaller, partition. O(log min(m,n))"
        }
      ]
    },
    {
      "id": "linked-list",
      "index": 6,
      "emoji": "6️⃣",
      "title": "Linked List",
      "count": 12,
      "tasks": [
        {
          "id": "reverse-linked-list",
          "number": 206,
          "title": "Reverse Linked List",
          "difficulty": "Easy",
          "hint": "prev/cur/next iterative. O(n)"
        },
        {
          "id": "merge-two-sorted",
          "number": 21,
          "title": "Merge Two Sorted",
          "difficulty": "Easy",
          "hint": "Dummy head, compare. O(n+m)"
        },
        {
          "id": "linked-list-cycle",
          "number": 141,
          "title": "Linked List Cycle",
          "difficulty": "Easy",
          "hint": "Floyd slow/fast. O(n)"
        },
        {
          "id": "palindrome-ll",
          "number": 234,
          "title": "Palindrome LL",
          "difficulty": "Easy",
          "hint": "Find mid, reverse, compare. O(n)"
        },
        {
          "id": "reorder-list",
          "number": 143,
          "title": "Reorder List",
          "difficulty": "Medium",
          "hint": "Find mid, reverse, merge. O(n)"
        },
        {
          "id": "remove-nth-from-end",
          "number": 19,
          "title": "Remove Nth from End",
          "difficulty": "Medium",
          "hint": "Two pointers n apart. O(n)"
        },
        {
          "id": "copy-random-pointer",
          "number": 138,
          "title": "Copy Random Pointer",
          "difficulty": "Medium",
          "hint": "3 pass or HashMap. O(n)"
        },
        {
          "id": "add-two-numbers",
          "number": 2,
          "title": "Add Two Numbers",
          "difficulty": "Medium",
          "hint": "Dummy + carry. O(max(m,n))",
          "practiceSlug": "add-two-numbers"
        },
        {
          "id": "find-duplicate",
          "number": 287,
          "title": "Find Duplicate",
          "difficulty": "Medium",
          "hint": "Floyd cycle (indices). O(n)"
        },
        {
          "id": "lru-cache",
          "number": 146,
          "title": "LRU Cache",
          "difficulty": "Medium",
          "hint": "HashMap + DLL. O(1)"
        },
        {
          "id": "merge-k-sorted-lists",
          "number": 23,
          "title": "Merge K Sorted Lists",
          "difficulty": "Hard",
          "hint": "Min-heap or divide&conquer. O(n log k)",
          "practiceSlug": "merge-k-sorted-lists"
        },
        {
          "id": "reverse-nodes-k-group",
          "number": 25,
          "title": "Reverse Nodes K-Group",
          "difficulty": "Hard",
          "hint": "Count k, reverse, recurse. O(n)"
        }
      ]
    },
    {
      "id": "trees",
      "index": 7,
      "emoji": "7️⃣",
      "title": "Trees",
      "count": 18,
      "tasks": [
        {
          "id": "invert-binary-tree",
          "number": 226,
          "title": "Invert Binary Tree",
          "difficulty": "Easy",
          "hint": "Swap left/right recursively. O(n)"
        },
        {
          "id": "max-depth",
          "number": 104,
          "title": "Max Depth",
          "difficulty": "Easy",
          "hint": "max(left,right)+1. O(n)"
        },
        {
          "id": "diameter-of-tree",
          "number": 543,
          "title": "Diameter of Tree",
          "difficulty": "Easy",
          "hint": "max(leftH+rightH) globally. O(n)"
        },
        {
          "id": "balanced-binary-tree",
          "number": 110,
          "title": "Balanced Binary Tree",
          "difficulty": "Easy",
          "hint": "Height DFS, return -1. O(n)"
        },
        {
          "id": "same-tree",
          "number": 100,
          "title": "Same Tree",
          "difficulty": "Easy",
          "hint": "Recursive equal check. O(n)"
        },
        {
          "id": "subtree-of-another",
          "number": 572,
          "title": "Subtree of Another",
          "difficulty": "Easy",
          "hint": "isSameTree per node. O(n·m)"
        },
        {
          "id": "sorted-array-to-bst",
          "number": 108,
          "title": "Sorted Array to BST",
          "difficulty": "Easy",
          "hint": "mid=root, recurse. O(n)"
        },
        {
          "id": "path-sum",
          "number": 112,
          "title": "Path Sum",
          "difficulty": "Easy",
          "hint": "DFS subtract target. O(n)"
        },
        {
          "id": "symmetric-tree",
          "number": 101,
          "title": "Symmetric Tree",
          "difficulty": "Easy",
          "hint": "Compare mirror recursive. O(n)"
        },
        {
          "id": "lca-of-bst",
          "number": 235,
          "title": "LCA of BST",
          "difficulty": "Medium",
          "hint": "Both → right. O(h)"
        },
        {
          "id": "level-order-traversal",
          "number": 102,
          "title": "Level Order Traversal",
          "difficulty": "Medium",
          "hint": "BFS queue. O(n)"
        },
        {
          "id": "right-side-view",
          "number": 199,
          "title": "Right Side View",
          "difficulty": "Medium",
          "hint": "BFS, last of each level. O(n)"
        },
        {
          "id": "count-good-nodes",
          "number": 1448,
          "title": "Count Good Nodes",
          "difficulty": "Medium",
          "hint": "DFS track max by path. O(n)"
        },
        {
          "id": "validate-bst",
          "number": 98,
          "title": "Validate BST",
          "difficulty": "Medium",
          "hint": "DFS min/max bounds. O(n)"
        },
        {
          "id": "kth-smallest-in-bst",
          "number": 230,
          "title": "Kth Smallest in BST",
          "difficulty": "Medium",
          "hint": "Inorder traversal. O(h+k)"
        },
        {
          "id": "build-from-pre-inorder",
          "number": 105,
          "title": "Build from Pre+Inorder",
          "difficulty": "Medium",
          "hint": "preorder[0]=root, find inorder. O(n)"
        },
        {
          "id": "max-path-sum",
          "number": 124,
          "title": "Max Path Sum",
          "difficulty": "Hard",
          "hint": "DFS maxGain. O(n)"
        },
        {
          "id": "serialize-deserialize",
          "number": 297,
          "title": "Serialize/Deserialize",
          "difficulty": "Hard",
          "hint": "BFS or preorder. O(n)"
        }
      ]
    },
    {
      "id": "tries",
      "index": 8,
      "emoji": "8️⃣",
      "title": "Tries",
      "count": 3,
      "tasks": [
        {
          "id": "implement-trie",
          "number": 208,
          "title": "Implement Trie",
          "difficulty": "Medium",
          "hint": "TrieNode={children:Map,isEnd}. O(m)"
        },
        {
          "id": "add-search-words",
          "number": 211,
          "title": "Add/Search Words",
          "difficulty": "Medium",
          "hint": "Trie+DFS for '.'. O(m·26^k)"
        },
        {
          "id": "word-search-ii",
          "number": 212,
          "title": "Word Search II",
          "difficulty": "Hard",
          "hint": "Trie+DFS+backtrack. O(m·n·4^L)"
        }
      ]
    },
    {
      "id": "heap",
      "index": 9,
      "emoji": "9️⃣",
      "title": "Heap / Priority Queue",
      "count": 8,
      "tasks": [
        {
          "id": "kth-largest-stream",
          "number": 703,
          "title": "Kth Largest Stream",
          "difficulty": "Easy",
          "hint": "Min-heap size k. O(log k)"
        },
        {
          "id": "last-stone-weight",
          "number": 1046,
          "title": "Last Stone Weight",
          "difficulty": "Easy",
          "hint": "Max-heap, pop2, push diff. O(n log n)"
        },
        {
          "id": "k-closest-points",
          "number": 973,
          "title": "K Closest Points",
          "difficulty": "Medium",
          "hint": "Min-heap by dist. O(n log k)"
        },
        {
          "id": "kth-largest-array",
          "number": 215,
          "title": "Kth Largest Array",
          "difficulty": "Medium",
          "hint": "Min-heap or QuickSelect. O(n log k)"
        },
        {
          "id": "task-scheduler",
          "number": 621,
          "title": "Task Scheduler",
          "difficulty": "Medium",
          "hint": "Freq count formula. O(n)"
        },
        {
          "id": "design-twitter",
          "number": 355,
          "title": "Design Twitter",
          "difficulty": "Medium",
          "hint": "Heap merge k feeds. O(k log k)"
        },
        {
          "id": "reorganize-string",
          "number": 767,
          "title": "Reorganize String",
          "difficulty": "Medium",
          "hint": "Max-heap, alternate. O(n log n)"
        },
        {
          "id": "find-median",
          "number": 295,
          "title": "Find Median",
          "difficulty": "Hard",
          "hint": "Two heaps balance. O(log n)"
        }
      ]
    },
    {
      "id": "backtracking",
      "index": 10,
      "emoji": "🔟",
      "title": "Backtracking",
      "count": 10,
      "tasks": [
        {
          "id": "subsets",
          "number": 78,
          "title": "Subsets",
          "difficulty": "Medium",
          "hint": "Include/exclude. O(2^n)",
          "practiceSlug": "subsets"
        },
        {
          "id": "combination-sum",
          "number": 39,
          "title": "Combination Sum",
          "difficulty": "Medium",
          "hint": "Backtrack, repeat allowed. O(2^t)",
          "practiceSlug": "combination-sum"
        },
        {
          "id": "permutations",
          "number": 46,
          "title": "Permutations",
          "difficulty": "Medium",
          "hint": "Backtrack used[]. O(n!)",
          "practiceSlug": "permutations"
        },
        {
          "id": "subsets-ii",
          "number": 90,
          "title": "Subsets II",
          "difficulty": "Medium",
          "hint": "Sort + skip dupes. O(2^n)"
        },
        {
          "id": "combination-sum-ii",
          "number": 40,
          "title": "Combination Sum II",
          "difficulty": "Medium",
          "hint": "Sort + skip same level. O(2^n)",
          "practiceSlug": "combination-sum-ii"
        },
        {
          "id": "word-search",
          "number": 79,
          "title": "Word Search",
          "difficulty": "Medium",
          "hint": "DFS+backtrack, mark visited. O(m·n·4^L)"
        },
        {
          "id": "palindrome-partition",
          "number": 131,
          "title": "Palindrome Partition",
          "difficulty": "Medium",
          "hint": "Backtrack + isPalin. O(n·2^n)"
        },
        {
          "id": "letter-combinations",
          "number": 17,
          "title": "Letter Combinations",
          "difficulty": "Medium",
          "hint": "Backtrack per digit. O(4^n)"
        },
        {
          "id": "combinations",
          "number": 77,
          "title": "Combinations",
          "difficulty": "Medium",
          "hint": "Backtrack C(n,k). O(C(n,k))",
          "practiceSlug": "combinations"
        },
        {
          "id": "n-queens",
          "number": 51,
          "title": "N-Queens",
          "difficulty": "Hard",
          "hint": "Backtrack rows, check col/diag. O(n!)",
          "practiceSlug": "n-queens"
        }
      ]
    },
    {
      "id": "graphs",
      "index": 11,
      "emoji": "1️⃣1️⃣",
      "title": "Graphs",
      "count": 14,
      "tasks": [
        {
          "id": "island-perimeter",
          "number": 463,
          "title": "Island Perimeter",
          "difficulty": "Easy",
          "hint": "Count 4 sides − adjacent. O(m·n)"
        },
        {
          "id": "number-of-islands",
          "number": 200,
          "title": "Number of Islands",
          "difficulty": "Medium",
          "hint": "DFS/BFS flood fill. O(m·n)"
        },
        {
          "id": "max-area-of-island",
          "number": 695,
          "title": "Max Area of Island",
          "difficulty": "Medium",
          "hint": "DFS count cells. O(m·n)",
          "practiceSlug": "max-area-of-island"
        },
        {
          "id": "clone-graph",
          "number": 133,
          "title": "Clone Graph",
          "difficulty": "Medium",
          "hint": "BFS+HashMap old→new. O(n)"
        },
        {
          "id": "walls-gates",
          "number": 286,
          "title": "Walls & Gates",
          "difficulty": "Medium",
          "hint": "Multi-source BFS. O(m·n)"
        },
        {
          "id": "rotting-oranges",
          "number": 994,
          "title": "Rotting Oranges",
          "difficulty": "Medium",
          "hint": "Multi-source BFS. O(m·n)"
        },
        {
          "id": "pacific-atlantic",
          "number": 417,
          "title": "Pacific Atlantic",
          "difficulty": "Medium",
          "hint": "Reverse BFS from edges. O(m·n)"
        },
        {
          "id": "surrounded-regions",
          "number": 130,
          "title": "Surrounded Regions",
          "difficulty": "Medium",
          "hint": "Mark border-O's, flip rest. O(m·n)"
        },
        {
          "id": "course-schedule",
          "number": 207,
          "title": "Course Schedule",
          "difficulty": "Medium",
          "hint": "Cycle detection (topo). O(V+E)"
        },
        {
          "id": "course-schedule-ii",
          "number": 210,
          "title": "Course Schedule II",
          "difficulty": "Medium",
          "hint": "Topological sort (Kahn's). O(V+E)"
        },
        {
          "id": "graph-valid-tree",
          "number": 261,
          "title": "Graph Valid Tree",
          "difficulty": "Medium",
          "hint": "V-1 edges, no cycle. O(V+E)"
        },
        {
          "id": "connected-components",
          "number": 323,
          "title": "Connected Components",
          "difficulty": "Medium",
          "hint": "Union-Find or DFS. O(V+E)"
        },
        {
          "id": "redundant-connection",
          "number": 684,
          "title": "Redundant Connection",
          "difficulty": "Medium",
          "hint": "Union-Find. O(n α(n))"
        },
        {
          "id": "word-ladder",
          "number": 127,
          "title": "Word Ladder",
          "difficulty": "Hard",
          "hint": "BFS level by level. O(n·m²)"
        }
      ]
    },
    {
      "id": "advanced-graphs",
      "index": 12,
      "emoji": "1️⃣2️⃣",
      "title": "Advanced Graphs",
      "count": 7,
      "tasks": [
        {
          "id": "min-cost-connect-all",
          "number": 1584,
          "title": "Min Cost Connect All",
          "difficulty": "Medium",
          "hint": "Kruskal or Prim. O(E log E)"
        },
        {
          "id": "network-delay-time",
          "number": 743,
          "title": "Network Delay Time",
          "difficulty": "Medium",
          "hint": "Dijkstra. O(E log V)"
        },
        {
          "id": "cheapest-flights-k-stops",
          "number": 787,
          "title": "Cheapest Flights K Stops",
          "difficulty": "Medium",
          "hint": "Bellman-Ford K+1 iters. O(K·E)"
        },
        {
          "id": "min-effort-path",
          "number": 1631,
          "title": "Min Effort Path",
          "difficulty": "Medium",
          "hint": "Dijkstra on grid. O(m·n log(m·n))"
        },
        {
          "id": "reconstruct-itinerary",
          "number": 332,
          "title": "Reconstruct Itinerary",
          "difficulty": "Hard",
          "hint": "Eulerian path (Hierholzer). O(E log E)"
        },
        {
          "id": "swim-in-rising-water",
          "number": 778,
          "title": "Swim in Rising Water",
          "difficulty": "Hard",
          "hint": "BS + DFS or Dijkstra. O(n² log n)",
          "practiceSlug": "swim-in-rising-water"
        },
        {
          "id": "alien-dictionary",
          "number": 269,
          "title": "Alien Dictionary",
          "difficulty": "Hard",
          "hint": "Topological sort. O(n)"
        }
      ]
    },
    {
      "id": "dp-1d",
      "index": 13,
      "emoji": "1️⃣3️⃣",
      "title": "1-D DP",
      "count": 14,
      "tasks": [
        {
          "id": "climbing-stairs",
          "number": 70,
          "title": "Climbing Stairs",
          "difficulty": "Easy",
          "hint": "dp[i]=dp[i-1]+dp[i-2]. O(n)"
        },
        {
          "id": "min-cost-stairs",
          "number": 746,
          "title": "Min Cost Stairs",
          "difficulty": "Easy",
          "hint": "dp[i]=cost+min(dp[i-1],dp[i-2]). O(n)"
        },
        {
          "id": "house-robber",
          "number": 198,
          "title": "House Robber",
          "difficulty": "Medium",
          "hint": "dp[i]=max(skip,take). O(n)"
        },
        {
          "id": "house-robber-ii",
          "number": 213,
          "title": "House Robber II",
          "difficulty": "Medium",
          "hint": "Two passes (skip first or last). O(n)"
        },
        {
          "id": "longest-palindromic-substr",
          "number": 5,
          "title": "Longest Palindromic Substr",
          "difficulty": "Medium",
          "hint": "Expand around center. O(n²)"
        },
        {
          "id": "palindromic-substrings",
          "number": 647,
          "title": "Palindromic Substrings",
          "difficulty": "Medium",
          "hint": "Expand, count. O(n²)"
        },
        {
          "id": "decode-ways",
          "number": 91,
          "title": "Decode Ways",
          "difficulty": "Medium",
          "hint": "dp[i] += valid 1-digit + 2-digit. O(n)"
        },
        {
          "id": "coin-change",
          "number": 322,
          "title": "Coin Change",
          "difficulty": "Medium",
          "hint": "dp[amt]=min(dp[amt-coin]+1). O(n·amt)"
        },
        {
          "id": "max-product-subarray",
          "number": 152,
          "title": "Max Product Subarray",
          "difficulty": "Medium",
          "hint": "Track min/max ending. O(n)"
        },
        {
          "id": "word-break",
          "number": 139,
          "title": "Word Break",
          "difficulty": "Medium",
          "hint": "dp[i] = any dp[j], s[j..i] in set. O(n²)"
        },
        {
          "id": "lis",
          "number": 300,
          "title": "LIS",
          "difficulty": "Medium",
          "hint": "dp[i]=max(dp[j]+1). O(n²) or O(n log n)"
        },
        {
          "id": "equal-subset-sum",
          "number": 416,
          "title": "Equal Subset Sum",
          "difficulty": "Medium",
          "hint": "Subset sum DP, target=sum/2. O(n·sum)"
        },
        {
          "id": "perfect-squares",
          "number": 279,
          "title": "Perfect Squares",
          "difficulty": "Medium",
          "hint": "dp[i]=min(dp[i-j²]+1). O(n√n)"
        },
        {
          "id": "combination-sum-iv",
          "number": 377,
          "title": "Combination Sum IV",
          "difficulty": "Medium",
          "hint": "Unbounded knapsack (order). O(n·target)"
        }
      ]
    },
    {
      "id": "dp-2d",
      "index": 14,
      "emoji": "1️⃣4️⃣",
      "title": "2-D DP",
      "count": 12,
      "tasks": [
        {
          "id": "unique-paths",
          "number": 62,
          "title": "Unique Paths",
          "difficulty": "Medium",
          "hint": "dp[i][j]=dp[i-1][j]+dp[i][j-1]. O(m·n)"
        },
        {
          "id": "lcs",
          "number": 1143,
          "title": "LCS",
          "difficulty": "Medium",
          "hint": "dp[i][j] = dp[i-1][j-1]+1 or max. O(m·n)"
        },
        {
          "id": "buy-sell-cooldown",
          "number": 309,
          "title": "Buy/Sell Cooldown",
          "difficulty": "Medium",
          "hint": "States: hold/sold/rest. O(n)"
        },
        {
          "id": "coin-change-ii",
          "number": 518,
          "title": "Coin Change II",
          "difficulty": "Medium",
          "hint": "Unbounded knapsack. O(n·amt)"
        },
        {
          "id": "target-sum",
          "number": 494,
          "title": "Target Sum",
          "difficulty": "Medium",
          "hint": "+/- assignment DP. O(n·sum)"
        },
        {
          "id": "interleaving-string",
          "number": 97,
          "title": "Interleaving String",
          "difficulty": "Medium",
          "hint": "Can form s3 from s1+s2. O(m·n)"
        },
        {
          "id": "maximal-square",
          "number": 221,
          "title": "Maximal Square",
          "difficulty": "Medium",
          "hint": "dp[i][j]=min(top,left,diag)+1. O(m·n)"
        },
        {
          "id": "edit-distance",
          "number": 72,
          "title": "Edit Distance",
          "difficulty": "Medium",
          "hint": "dp[i][j] = edit ops. O(m·n)"
        },
        {
          "id": "lip-matrix",
          "number": 329,
          "title": "LIP Matrix",
          "difficulty": "Hard",
          "hint": "DFS+memo. O(m·n)"
        },
        {
          "id": "distinct-subsequences",
          "number": 115,
          "title": "Distinct Subsequences",
          "difficulty": "Hard",
          "hint": "dp[i][j] = ways s[0..j] in t[0..i]. O(m·n)"
        },
        {
          "id": "burst-balloons",
          "number": 312,
          "title": "Burst Balloons",
          "difficulty": "Hard",
          "hint": "Interval DP, k=last burst. O(n³)",
          "practiceSlug": "burst-balloons"
        },
        {
          "id": "regex-matching",
          "number": 10,
          "title": "Regex Matching",
          "difficulty": "Hard",
          "hint": "dp[i][j] with * handling. O(m·n)"
        }
      ]
    },
    {
      "id": "greedy",
      "index": 15,
      "emoji": "1️⃣5️⃣",
      "title": "Greedy",
      "count": 8,
      "tasks": [
        {
          "id": "max-subarray",
          "number": 53,
          "title": "Max Subarray",
          "difficulty": "Easy",
          "hint": "Kadane's algorithm. O(n)"
        },
        {
          "id": "jump-game",
          "number": 55,
          "title": "Jump Game",
          "difficulty": "Medium",
          "hint": "Track maxReach. O(n)"
        },
        {
          "id": "jump-game-ii",
          "number": 45,
          "title": "Jump Game II",
          "difficulty": "Medium",
          "hint": "Greedy farthest reach. O(n)",
          "practiceSlug": "jump-game-ii"
        },
        {
          "id": "gas-station",
          "number": 134,
          "title": "Gas Station",
          "difficulty": "Medium",
          "hint": "Sum≥0 → solution; track start. O(n)"
        },
        {
          "id": "hand-of-straights",
          "number": 846,
          "title": "Hand of Straights",
          "difficulty": "Medium",
          "hint": "Sort+greedy groups. O(n log n)"
        },
        {
          "id": "merge-triplets",
          "number": 1899,
          "title": "Merge Triplets",
          "difficulty": "Medium",
          "hint": "Check valid, max each pos. O(n)"
        },
        {
          "id": "partition-labels",
          "number": 763,
          "title": "Partition Labels",
          "difficulty": "Medium",
          "hint": "Last occurrence + greedy. O(n)",
          "practiceSlug": "partition-labels"
        },
        {
          "id": "valid-paren-string",
          "number": 678,
          "title": "Valid Paren String",
          "difficulty": "Medium",
          "hint": "Track min/max open count. O(n)"
        }
      ]
    },
    {
      "id": "intervals",
      "index": 16,
      "emoji": "1️⃣6️⃣",
      "title": "Intervals",
      "count": 6,
      "tasks": [
        {
          "id": "meeting-rooms",
          "number": 252,
          "title": "Meeting Rooms",
          "difficulty": "Easy",
          "hint": "Sort by start, check overlap. O(n log n)"
        },
        {
          "id": "insert-interval",
          "number": 57,
          "title": "Insert Interval",
          "difficulty": "Medium",
          "hint": "Iterate, merge overlapping. O(n)"
        },
        {
          "id": "merge-intervals",
          "number": 56,
          "title": "Merge Intervals",
          "difficulty": "Medium",
          "hint": "Sort by start, merge. O(n log n)"
        },
        {
          "id": "non-overlapping",
          "number": 435,
          "title": "Non-overlapping",
          "difficulty": "Medium",
          "hint": "Sort by end, greedy count. O(n log n)"
        },
        {
          "id": "meeting-rooms-ii",
          "number": 253,
          "title": "Meeting Rooms II",
          "difficulty": "Medium",
          "hint": "Min-heap end times. O(n log n)"
        },
        {
          "id": "min-interval-query",
          "number": 1851,
          "title": "Min Interval Query",
          "difficulty": "Hard",
          "hint": "Offline + min-heap. O((n+q) log n)"
        }
      ]
    },
    {
      "id": "math-geometry",
      "index": 17,
      "emoji": "1️⃣7️⃣",
      "title": "Math & Geometry",
      "count": 9,
      "tasks": [
        {
          "id": "happy-number",
          "number": 202,
          "title": "Happy Number",
          "difficulty": "Easy",
          "hint": "Floyd cycle (digit sum). O(log n)"
        },
        {
          "id": "plus-one",
          "number": 66,
          "title": "Plus One",
          "difficulty": "Easy",
          "hint": "Iterate right, carry. O(n)"
        },
        {
          "id": "rotate-image",
          "number": 48,
          "title": "Rotate Image",
          "difficulty": "Medium",
          "hint": "Transpose + reverse rows. O(n²)",
          "practiceSlug": "rotate-image"
        },
        {
          "id": "spiral-matrix",
          "number": 54,
          "title": "Spiral Matrix",
          "difficulty": "Medium",
          "hint": "4 boundaries, shrink. O(m·n)"
        },
        {
          "id": "set-matrix-zeroes",
          "number": 73,
          "title": "Set Matrix Zeroes",
          "difficulty": "Medium",
          "hint": "Mark rows/cols first. O(m·n)"
        },
        {
          "id": "pow-x-n",
          "number": 50,
          "title": "Pow(x, n)",
          "difficulty": "Medium",
          "hint": "Fast power (divide by 2). O(log n)",
          "practiceSlug": "powx-n"
        },
        {
          "id": "multiply-strings",
          "number": 43,
          "title": "Multiply Strings",
          "difficulty": "Medium",
          "hint": "Simulate digit mult. O(m·n)",
          "practiceSlug": "multiply-strings"
        },
        {
          "id": "detect-squares",
          "number": 2013,
          "title": "Detect Squares",
          "difficulty": "Medium",
          "hint": "Count points (x,y). O(n)"
        },
        {
          "id": "robot-bounded",
          "number": 1041,
          "title": "Robot Bounded",
          "difficulty": "Medium",
          "hint": "After 4 cycles → returns or infinite. O(n)"
        }
      ]
    },
    {
      "id": "bit-manipulation",
      "index": 18,
      "emoji": "1️⃣8️⃣",
      "title": "Bit Manipulation",
      "count": 8,
      "tasks": [
        {
          "id": "single-number",
          "number": 136,
          "title": "Single Number",
          "difficulty": "Easy",
          "hint": "XOR all. a^a=0, a^0=a. O(n)"
        },
        {
          "id": "hamming-weight",
          "number": 191,
          "title": "Hamming Weight",
          "difficulty": "Easy",
          "hint": "n &= (n-1) clears lowest bit. O(k)"
        },
        {
          "id": "counting-bits",
          "number": 338,
          "title": "Counting Bits",
          "difficulty": "Easy",
          "hint": "dp[i]=dp[i>>1]+(i&1). O(n)"
        },
        {
          "id": "reverse-bits",
          "number": 190,
          "title": "Reverse Bits",
          "difficulty": "Easy",
          "hint": "32 iters: (result<<1)|(n&1). O(1)"
        },
        {
          "id": "missing-number",
          "number": 268,
          "title": "Missing Number",
          "difficulty": "Easy",
          "hint": "XOR 0..n ^ nums. O(n)"
        },
        {
          "id": "add-binary",
          "number": 67,
          "title": "Add Binary",
          "difficulty": "Easy",
          "hint": "Simulate with carry. O(n)"
        },
        {
          "id": "sum-without",
          "number": 371,
          "title": "Sum Without +/-",
          "difficulty": "Medium",
          "hint": "XOR (no carry) + AND<<1. O(1)"
        },
        {
          "id": "reverse-integer",
          "number": 7,
          "title": "Reverse Integer",
          "difficulty": "Medium",
          "hint": "% 10 digit extraction. O(log n)",
          "practiceSlug": "reverse-integer"
        }
      ]
    }
  ]
}
