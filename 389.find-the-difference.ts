/*
 * @lc app=leetcode id=389 lang=typescript
 *
 * [389] Find the Difference
 */

// @lc code=start
function findTheDifference(s: string, t: string): string {
  const count:any = {}
  for (let char of s) {
    if (!count[char]) count[char] = 1
    count[char]++
  }
  for (let char of t) {
    if (!count[char]) return char
    count[char]--
  }
  for (let char in count) {
    if (count[char] === 0) return char 
  }
  return ''
};
// @lc code=end

