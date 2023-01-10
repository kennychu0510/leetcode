/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  const words = s.trim().split(' ')
  return words[words.length - 1].length
};
// @lc code=end

