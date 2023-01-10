/*
 * @lc app=leetcode id=543 lang=typescript
 *
 * [543] Diameter of Binary Tree
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

function diameterOfBinaryTree(root: TreeNode | null): number {
  function getDiameter(n: number, node: TreeNode | null): number {
    if (!node) return n
    n++
    return Math.max(getDiameter(n, node.left), getDiameter(n, node.right))
  }

  function traverse(root: TreeNode | null, max: number): number {
    if (!root) return max
    max = Math.max((getDiameter(0, root.left) + getDiameter(0, root.right)), max)
    return Math.max(traverse(root.left, max), traverse(root.right, max))
  }
  
  return traverse(root, 0)

};
// @lc code=end

