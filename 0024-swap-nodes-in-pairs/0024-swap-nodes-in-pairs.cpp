/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        // Dummy node before head to simplify edge cases
        ListNode dummy(0);
        dummy.next = head;

        ListNode* prev = &dummy;

        while (prev->next != nullptr && prev->next->next != nullptr) {
            // Nodes to be swapped
            ListNode* first = prev->next;
            ListNode* second = first->next;

            // Rewire pointers to swap first and second
            first->next = second->next;
            second->next = first;
            prev->next = second;

            // Move prev two nodes ahead
            prev = first;
        }

        return dummy.next;
    }
};
