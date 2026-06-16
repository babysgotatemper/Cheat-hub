// Static problem data. Replaces the database for the DB-less deployment.
// `tags`, `companies` and `testCases` are kept as JSON strings to match the
// shape the Prisma layer used to return, so consuming pages keep using
// `JSON.parse(...)` unchanged.

export interface StaticProblem {
  id: number
  slug: string
  title: string
  frontendId?: string
  difficulty: string
  acRate?: number
  description: string
  tags: string
  companies: string
  starterCode: string
  testCases: string
  solution?: string
  editorial?: string
}

const rawProblems: Omit<StaticProblem, 'id'>[] = [
  {
    slug: 'two-sum',
    title: 'Two Sum',
    difficulty: 'Easy',
    description: `Given an array of integers nums and an integer target, return the indices of the two numbers that add up to target.

You may assume that each input has exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Example 1:**
\`\`\`
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: nums[0] + nums[1] == 9, so we return [0, 1].
\`\`\`

**Example 2:**
\`\`\`
Input: nums = [3,2,4], target = 6
Output: [1,2]
\`\`\`

**Example 3:**
\`\`\`
Input: nums = [3,3], target = 6
Output: [0,1]
\`\`\`

**Constraints:**
- \`2 <= nums.length <= 10^4\`
- \`-10^9 <= nums[i] <= 10^9\`
- \`-10^9 <= target <= 10^9\``,
    tags: JSON.stringify(['Array', 'Hash Table']),
    companies: JSON.stringify(['Amazon', 'Microsoft', 'Google']),
    starterCode: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Your solution here
};`,
    testCases: JSON.stringify([
      { input: 'nums = [2,7,11,15], target = 9', expected: '[0,1]' },
      { input: 'nums = [3,2,4], target = 6', expected: '[1,2]' },
      { input: 'nums = [3,3], target = 6', expected: '[0,1]' },
    ]),
    solution: `var twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }

    return [];
};`,
    editorial: `## Approach 1: Brute Force
The brute force approach is to check every pair of numbers to see if they add up to the target.

**Time Complexity:** O(n²)
**Space Complexity:** O(1)

## Approach 2: Hash Map (Optimal)
We use a hash map to store the numbers we've seen so far. For each number, we check if its complement (target - num) exists in the map.

**Time Complexity:** O(n)
**Space Complexity:** O(n)

This is the optimal solution as it allows us to find the two numbers in a single pass through the array.`,
  },
  {
    slug: 'reverse-string',
    title: 'Reverse String',
    difficulty: 'Easy',
    description: `Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

**Example 1:**
\`\`\`
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
\`\`\`

**Example 2:**
\`\`\`
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
\`\`\`

**Constraints:**
- \`1 <= s.length <= 10^5\`
- \`s[i]\` is a printable ascii character.`,
    tags: JSON.stringify(['String', 'Two Pointers']),
    companies: JSON.stringify(['Apple', 'Microsoft']),
    starterCode: `/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // Your solution here
};`,
    testCases: JSON.stringify([
      { input: 's = ["h","e","l","l","o"]', expected: '["o","l","l","e","h"]' },
      { input: 's = ["H","a","n","n","a","h"]', expected: '["h","a","n","n","a","H"]' },
    ]),
    solution: `var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
};`,
    editorial: `## Approach: Two Pointers
Use two pointers, one at the start and one at the end of the array. Swap the characters and move the pointers towards each other.

**Time Complexity:** O(n)
**Space Complexity:** O(1)`,
  },
  {
    slug: 'contains-duplicate',
    title: 'Contains Duplicate',
    difficulty: 'Easy',
    description: `Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

**Example 1:**
\`\`\`
Input: nums = [1,2,3,1]
Output: true
\`\`\`

**Example 2:**
\`\`\`
Input: nums = [1,2,3,4]
Output: false
\`\`\`

**Example 3:**
\`\`\`
Input: nums = [99,99]
Output: true
\`\`\`

**Constraints:**
- \`1 <= nums.length <= 10^5\`
- \`-10^9 <= nums[i] <= 10^9\``,
    tags: JSON.stringify(['Array', 'Hash Table']),
    companies: JSON.stringify(['Amazon', 'Google', 'Facebook']),
    starterCode: `/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Your solution here
};`,
    testCases: JSON.stringify([
      { input: 'nums = [1,2,3,1]', expected: 'true' },
      { input: 'nums = [1,2,3,4]', expected: 'false' },
      { input: 'nums = [99,99]', expected: 'true' },
    ]),
    solution: `var containsDuplicate = function(nums) {
    const seen = new Set();

    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }

    return false;
};`,
    editorial: `## Approach 1: Hash Set
Use a Set to track numbers we've seen. If we encounter a number already in the set, return true.

**Time Complexity:** O(n)
**Space Complexity:** O(n)

## Approach 2: Sorting
Sort the array and check if adjacent elements are equal.

**Time Complexity:** O(n log n)
**Space Complexity:** O(1)`,
  },
  {
    slug: 'valid-parentheses',
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

**Example 1:**
\`\`\`
Input: s = "()"
Output: true
\`\`\`

**Example 2:**
\`\`\`
Input: s = "()[]{}"
Output: true
\`\`\`

**Example 3:**
\`\`\`
Input: s = "([)]"
Output: false
\`\`\``,
    tags: JSON.stringify(['String', 'Stack']),
    companies: JSON.stringify(['Google', 'Meta', 'Apple']),
    starterCode: `/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Your solution here
};`,
    testCases: JSON.stringify([
      { input: '"()"', expected: 'true' },
      { input: '"()[]{}"', expected: 'true' },
      { input: '"([)]"', expected: 'false' },
    ]),
    solution: `var isValid = function(s) {
    const stack = [];
    const pairs = { ')': '(', '}': '{', ']': '[' };

    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};`,
    editorial: `## Approach: Stack
Use a stack to track opening brackets. When we encounter a closing bracket, check if it matches the most recent opening bracket.

**Time Complexity:** O(n)
**Space Complexity:** O(n)`,
  },
  {
    slug: 'merge-sorted-array',
    title: 'Merge Sorted Array',
    difficulty: 'Easy',
    description: `You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of valid elements in nums1 and nums2 respectively.

Merge nums2 into nums1 as one sorted array.

Note: You may assume that nums1 has a total length of m + n, that it has enough space to hold additional elements from nums2.

**Example 1:**
\`\`\`
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
\`\`\`

**Example 2:**
\`\`\`
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
\`\`\``,
    tags: JSON.stringify(['Array', 'Two Pointers']),
    companies: JSON.stringify(['Microsoft', 'Amazon', 'LinkedIn']),
    starterCode: `/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // Your solution here
};`,
    testCases: JSON.stringify([
      { input: '[[1,2,3,0,0,0], 3, [2,5,6], 3]', expected: '[1,2,2,3,5,6]' },
      { input: '[[1], 1, [], 0]', expected: '[1]' },
    ]),
    solution: `var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;

    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
};`,
    editorial: `## Approach: Two Pointers
Start from the end of both arrays and merge backwards. This avoids overwriting elements in nums1.

**Time Complexity:** O(m + n)
**Space Complexity:** O(1)`,
  },
  {
    slug: 'longest-substring-without-repeating',
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    description: `Given a string s, find the length of the longest substring without repeating characters.

**Example 1:**
\`\`\`
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
\`\`\`

**Example 2:**
\`\`\`
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
\`\`\`

**Example 3:**
\`\`\`
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
\`\`\``,
    tags: JSON.stringify(['Hash Table', 'String', 'Sliding Window']),
    companies: JSON.stringify(['Amazon', 'Google', 'Microsoft', 'Meta']),
    starterCode: `/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // Your solution here
};`,
    testCases: JSON.stringify([
      { input: '"abcabcbb"', expected: '3' },
      { input: '"bbbbb"', expected: '1' },
      { input: '"pwwkew"', expected: '3' },
    ]),
    solution: `var lengthOfLongestSubstring = function(s) {
    const charIndex = {};
    let maxLen = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        if (charIndex[s[i]] !== undefined && charIndex[s[i]] >= start) {
            start = charIndex[s[i]] + 1;
        }
        charIndex[s[i]] = i;
        maxLen = Math.max(maxLen, i - start + 1);
    }

    return maxLen;
};`,
    editorial: `## Approach: Sliding Window
Use a sliding window with a hash map to track character positions. Expand the window and update the maximum length when a duplicate is found.

**Time Complexity:** O(n)
**Space Complexity:** O(min(m, n)) where m is charset size`,
  },
  {
    slug: 'add-two-numbers',
    title: 'Add Two Numbers',
    difficulty: 'Medium',
    description: `You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example 1:**
\`\`\`
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
\`\`\``,
    tags: JSON.stringify(['Linked List', 'Math', 'Recursion']),
    companies: JSON.stringify(['Amazon', 'Google', 'Meta']),
    starterCode: `/**
 * Definition for singly-linked list node. Uncomment if needed.
 * function ListNode(val, next = null) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // Your solution here
};`,
    testCases: JSON.stringify([
      { input: '[[2,4,3], [5,6,4]]', expected: '[7,0,8]' },
    ]),
    solution: `var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const sum = val1 + val2 + carry;

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return dummy.next;
};`,
    editorial: `## Approach: Iterative with Carry
Traverse both linked lists simultaneously, adding corresponding digits and handling the carry.

**Time Complexity:** O(max(m, n))
**Space Complexity:** O(max(m, n))`,
  },
  {
    slug: 'trapping-rain-water',
    title: 'Trapping Rain Water',
    difficulty: 'Hard',
    description: `Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

**Example 1:**
\`\`\`
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water are trapped.
\`\`\`

**Constraints:**
- \`n == height.length\`
- \`1 <= n <= 2 * 10^4\`
- \`0 <= height[i] <= 10^5\``,
    tags: JSON.stringify(['Array', 'Two Pointers', 'Dynamic Programming', 'Stack']),
    companies: JSON.stringify(['Google', 'Amazon', 'Meta', 'Microsoft']),
    starterCode: `/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // Your solution here
};`,
    testCases: JSON.stringify([
      { input: '[0,1,0,2,1,0,1,3,2,1,2,1]', expected: '6' },
    ]),
    solution: `var trap = function(height) {
    if (height.length === 0) return 0;

    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }

    return water;
};`,
    editorial: `## Approach: Two Pointers
Use two pointers from both ends. Keep track of the maximum heights seen so far. The water trapped at each position is determined by the minimum of the maximum heights on both sides.

**Time Complexity:** O(n)
**Space Complexity:** O(1)`,
  },
]

export const problems: StaticProblem[] = rawProblems.map((p, i) => ({
  id: i + 1,
  ...p,
}))

export function getProblemBySlug(slug: string): StaticProblem | undefined {
  return problems.find((p) => p.slug === slug)
}
