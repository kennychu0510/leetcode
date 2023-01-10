/*
 * @lc app=leetcode id=374 lang=typescript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
  function binarySearch(low: number, top: number): number {
    const mid = Math.round((low + top) / 2)
    const result = guess(mid)
    if (result === 0) return mid
    if (result < 0) return binarySearch(low, mid)
    else return binarySearch(mid, top)
  }

  return binarySearch(0, n)

};
// @lc code=end

