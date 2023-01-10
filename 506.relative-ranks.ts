/*
 * @lc app=leetcode id=506 lang=typescript
 *
 * [506] Relative Ranks
 */

// @lc code=start
function findRelativeRanks(score: number[]): string[] {
  let rankings = score.slice().sort((a, b) => b - a)
  let output: string[] = [];
  for (let x of score) {
    let rank: number | string = rankings.indexOf(x) 
    if (rank === 0) rank = 'Gold Medal'
    else if (rank === 1) rank = 'Silver Medal'
    else if (rank === 2) rank = 'Bronze Medal'
    else rank = String(rank + 1)
    output.push(rank)
  }
  return output
};
// @lc code=end

