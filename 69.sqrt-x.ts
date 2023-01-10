/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
function mySqrt(x: number): number {

  function binarySearch(low: number, high: number): number {
    const mid = Math.floor((high + low) / 2)
    const midSquared = mid * mid
    if (midSquared === x) return mid

    if (high - 1 === low) {
      if (high * high <= x) return high
      return low
    }

    if (midSquared > x) {
      return binarySearch(low, mid)
    } else {
      return binarySearch(mid, high)
    }
  }

  return binarySearch(0, x)
};
// @lc code=end

