/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  const count: any = {}
  for (let num of nums) {
    if (!count[num]) count[num] = 0
    count[num]++
    if (count[num] > Math.floor(nums.length / 2)) return num
  }
  let max = 0
  for (let num in count) {
    if (Number(count[num]) > max) max = Number(num)
  }
  return max
};
// @lc code=end

