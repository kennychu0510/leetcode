/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let head = new ListNode()
  let ptr = head
  let carryOver = 0
  while (l1 || l2) {
    const newNode = new ListNode()
    let sum = 0 + carryOver

    if (l1) {
      sum += l1.val
      l1 = l1.next
    }
    if (l2) {
      sum += l2.val
      l2 = l2.next
    }
    carryOver = Math.floor(sum / 10)
    newNode.val = sum % 10
    ptr.next = newNode
    ptr = ptr.next
  }
  if (carryOver > 0) {
    const newNode = new ListNode(carryOver)
    ptr.next = newNode
  }
  
  return head.next

};


// @lc code=end

