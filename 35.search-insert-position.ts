/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  function binarySearch(low: number, high: number): number {
    const mid = Math.floor(high + low / 2)
    if (nums[mid] === target) return mid
    if (low === high - 1) {
      if (target < nums[low]) return low
      return high
    }
    if (target > nums[mid]) {
      return binarySearch(mid + 1, high)
    } else {
      return binarySearch(low, mid - 1)
    }
  }
  return binarySearch(0, nums.length - 1)
};
// @lc code=end

