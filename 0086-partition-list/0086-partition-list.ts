function partition(head: ListNode | null, x: number): ListNode | null {
    const beforeHead = new ListNode(0);
    const afterHead = new ListNode(0);

    let before = beforeHead;
    let after = afterHead;
    let current = head;

    while (current !== null) {
        if (current.val < x) {
            before.next = current;
            before = before.next;
        } else {
            after.next = current;
            after = after.next;
        }

        current = current.next;
    }

    after.next = null;
    before.next = afterHead.next;

    return beforeHead.next;
}