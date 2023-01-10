/*
 * @lc app=leetcode id=463 lang=typescript
 *
 * [463] Island Perimeter
 */

// @lc code=start
function islandPerimeter(grid: number[][]): number {

  let perimeter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        perimeter += checkCell(i, j);
      }
    }
  }

  function checkCell(row: number, col: number): number {
    let perimeter = 0
    // check top
    if (row === 0) {
      perimeter++
    } else if (grid[row - 1][col] === 0) {
      perimeter++;
    }

    if (row === grid.length - 1) {
      perimeter++;
    } else if (grid[row + 1][col] === 0) {
      perimeter++;
    }

    if (col === 0) {
      perimeter++;
    } else if (grid[row][col - 1] === 0) {
      perimeter++;
    }

    if (col === grid[0].length - 1) {
      perimeter++;
    } else if (grid[row][col + 1] === 0) {
      perimeter++;
    }
    return perimeter;
  }

  return perimeter;
};

// @lc code=end

