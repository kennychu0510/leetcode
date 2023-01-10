/*
 * @lc app=leetcode id=292 lang=typescript
 *
 * [292] Nim Game
 */

// @lc code=start
function canWinNim(n: number): boolean {

  for (let i of [1,2,3]) {
    if (makeMove(n, i)) {
      return true
    }
  }


  function makeMove(n: number, get: number) {
    if (won(n, get)) {
      return true
    } else {
      const newN = n - get
      for (let i of [1,2,3]) {
        makeMove(newN, i)
      }
    }
  }

  function won(n: number, get: number) {
    if (get === n) return 1
    if (n - get <= 3) return -1 
    return null
  }

  return false
};
// @lc code=end

