/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    const dummy = new ListNode(0, head);

    // Find node immediately before the left position
    let beforeLeft = dummy;
    for (let i = 1; i < left; i++) {
        beforeLeft = beforeLeft.next;
    }

    // Reverse nodes from left to right
    let prev = null;
    let curr = beforeLeft.next;

    for (let i = 0; i < right - left + 1; i++) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // Reconnect:
    // beforeLeft.next was the original left node, now the tail of reversed part
    beforeLeft.next.next = curr;
    beforeLeft.next = prev;

    return dummy.next;
};