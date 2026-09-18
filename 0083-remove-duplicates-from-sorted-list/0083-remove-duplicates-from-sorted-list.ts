function deleteDuplicates(head: ListNode | null): ListNode | null {
    let current = head;

    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            // Remove the duplicate node.
            current.next = current.next.next;
        } else {
            // Move forward only when values differ.
            current = current.next;
        }
    }

    return head;
}