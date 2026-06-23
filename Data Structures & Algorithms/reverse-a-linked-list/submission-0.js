/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if(head == null || head.next == null) return head;
        let prev = null;
        while(head !== null){
            const nextTemp = head.next;
            head.next = prev;
            prev = head;
            head = nextTemp;
        }
        return prev;
    }
}
