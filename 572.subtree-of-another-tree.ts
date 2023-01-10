/*
 * @lc app=leetcode id=572 lang=typescript
 *
 * [572] Subtree of Another Tree
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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {

  function preTraverseTree(node: TreeNode): boolean {
    if (!node) return false
    if (compareTree(node, subRoot)) return true
    return preTraverseTree(node.left) || preTraverseTree(node.right)
  }

  return preTraverseTree(root)
};


function compareTree(node1: TreeNode | null, node2: TreeNode | null): boolean {
  if ((!node1 && node2) || (node1 && !node2)) return false
  if (node1 && node2 && node1.val !== node2.val) return false
  if (node1 && node2 && node1.val === node2.val) {
    return compareTree(node1.left, node2.left) && compareTree(node1.right, node2.right)
  }
  return true
}
// @lc code=end

