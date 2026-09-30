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

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (!headA || !headB) return null;

  let a: ListNode | null = headA;
  let b: ListNode | null = headB;

  // Move both pointers; when one reaches the end, redirect it to the other list's head.
  // They will meet at the intersection node or both become null.
  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }

  return a; // could be intersection node or null
}