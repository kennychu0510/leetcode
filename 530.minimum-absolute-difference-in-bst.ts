/*
 * @lc app=leetcode id=530 lang=typescript
 *
 * [530] Minimum Absolute Difference in BST
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

function getMinimumDifference(root: TreeNode | null): number {
  let min = Number.POSITIVE_INFINITY;

  function getMin(node: TreeNode | null) {
    if (!node) return
    if (node.left) {
      getMinFromNode(node.left, node.val)
    }
    if (node.right) {
      getMinFromNode(node.right, node.val)
    }
    
    getMin(node.left)
    getMin(node.right)
  }
  function getMinFromNode(node: TreeNode | null, rootNum: number): void {
    if (!node) return;
    if (Math.abs(rootNum - node.val) < min) min = Math.abs(rootNum - node.val)
    getMinFromNode(node.left, rootNum)
    getMinFromNode(node.right, rootNum)
  }

  getMin(root);

  return min
  
};
// @lc code=end

