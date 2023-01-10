/*
 * @lc app=leetcode id=485 lang=typescript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
function findMaxConsecutiveOnes(nums: number[]): number {
  // return String(nums).replace(/,/g, '').split('0').map(arr => arr.length).reduce((a, b) => a - b > 0 ? a : b, 0);
  let max = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      max = Math.max(max, count)
      count = 0;
    } 
  }
  return Math.max(max, count);
};

// @lc code=end

