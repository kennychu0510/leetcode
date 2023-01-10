/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
  let MAX = 0;
  let LEFT = 0;
  let RIGHT = height.length;

  while(LEFT < RIGHT) {
    const WATER = (RIGHT - LEFT) * Math.min(height[LEFT], height[RIGHT])
    if (WATER > MAX) MAX = WATER;
    if (height[LEFT] < height[RIGHT]) {
      LEFT++
    } else {
      RIGHT--
    }
  }
  
  return MAX
};
// @lc code=end

