/*
 * @lc app=leetcode id=448 lang=typescript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
function findDisappearedNumbers(nums: number[]): number[] {

  const output: number[] = [];
  for (let i = 1; i <= nums.length; i++) {
    if (nums.indexOf(i) === -1) output.push(i)
  }

  return output
  
};
// @lc code=end

