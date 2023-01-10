/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0

  let i = 0
  let j = 0
  for (i = 1; i < nums.length; i++) {
    if (nums[j] != nums[i]) {
      j = j + 1;
      nums[j] = nums[i];
    }
  }
  return j+1
};
// @lc code=end

