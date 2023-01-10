/*
 * @lc app=leetcode id=1518 lang=typescript
 *
 * [1518] Water Bottles
 */

// @lc code=start
function numWaterBottles(numBottles: number, numExchange: number): number {
  let drink = numBottles
  function exchange() {
    const newBottles = Math.floor(numBottles / numExchange)
    if (!newBottles) return
    drink += newBottles
    const remaining = numBottles % numExchange
    numBottles = remaining + newBottles
    exchange()
  }

  exchange()

  return drink

};
// @lc code=end

