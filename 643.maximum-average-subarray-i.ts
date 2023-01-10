/*
 * @lc app=leetcode id=643 lang=typescript
 *
 * [643] Maximum Average Subarray I
 */

// @lc code=start
function findMaxAverage(nums: number[], k: number): number {
  let max = Number.NEGATIVE_INFINITY
  for (let i = 0; i <= nums.length - k; i++) {
    let sum = 0
    for (let j = i; j < i + k; j++) {
      sum += nums[j]
    }
    const avg = sum / k
    if (avg > max) max = avg
  }
  return max
};
// @lc code=end

