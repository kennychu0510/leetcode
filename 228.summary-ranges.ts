/*
 * @lc app=leetcode id=228 lang=typescript
 *
 * [228] Summary Ranges
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
  if (nums.length === 0) return []
  let output:string[] = [];
  let start: string = String(nums[0])
  let prev = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - 1 !== prev) {
      if (start.length > 1) {
        output.push(start + prev)
      } else {
        output.push(start)
      }
      start = String(nums[i])
    } else if (start.length === 1) {
      start += '->'
    }

    prev = nums[i]
  }
  if (start.length > 1) {
    output.push(start + prev)
  } else {
    output.push(start)
  }

  return output
};
// @lc code=end

