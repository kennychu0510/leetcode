/*
 * @lc app=leetcode id=257 lang=typescript
 *
 * [257] Binary Tree Paths
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function binaryTreePaths(root: TreeNode | null): string[] {
  let output: string[] = [];
  makePath(root, String(root.val))

  function makePath(node: TreeNode | null, path: string): void {
    if (!node.left && !node.right) {
      output.push(path)
      return
    }
    
    if (node.left) {
      const newPath = path + '->' + node.left.val
      makePath(node.left, newPath)
    }
    if (node.right) {
      const newPath = path + '->' + node.right.val
      makePath(node.right, newPath)
    }
  }
  return output
};
// @lc code=end

