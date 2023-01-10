/*
 * @lc app=leetcode id=657 lang=typescript
 *
 * [657] Robot Return to Origin
 */

// @lc code=start
function judgeCircle(moves: string): boolean {
  enum Direction {
    U = 1,
    D = -1,
    L = -1,
    R = 1
  }
  let y = 0;
  let x = 0;
  for (let move of moves) {
    if (move === 'U' || move === 'D') {
      y += Direction[move]
    } else {
      x += Direction[move]
    }
  }
  if (x === 0 && y === 0) {
    return true
  }
  return false
};
// @lc code=end

