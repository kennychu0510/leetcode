/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let longest = 0
  let left = 0
  let right = 0

  let charMap = new Map<string, number>()
  // if (s[left]) {
  //   charMap.set(s[left], 1)
  //   longest = 1
  // }

  while (right < s.length) {
    if (!charMap.get(s[right])) {
      charMap.set(s[right], 1)
      right++
      if (right - left > longest) {
        longest = right - left
      }
    } else {
      const repeatedChar = charMap.get(s[right])
      while (repeatedChar !== charMap.get(s[left])) {
        charMap.delete(s[left])
        left++
      }
      charMap.delete(s[left])
      left++
    }
  }

  return longest
};
// @lc code=end

