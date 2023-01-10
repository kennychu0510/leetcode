/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairs(n: number): number {
  let pre = 1
  let curr = 1
  let temp = 0

  for (let i = 1; i < n; i++) {
    temp = curr
    curr = curr + pre
    pre = temp
  }
  return curr

};
// @lc code=end

