/*
 * @lc app=leetcode id=326 lang=typescript
 *
 * [326] Power of Three
 */

// @lc code=start
function isPowerOfThree(n: number): boolean {
  if (n === 1) return true
  let x = 1
  for (let i = 0; i < n; i++) {
    x = x * 3
    if (x === n) return true
    if (x > n) return false
  }
  return false
};
// @lc code=end

