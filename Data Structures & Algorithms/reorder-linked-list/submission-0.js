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
     * @return {void}
     */
    reorderList(head) {
        let slow = head, fast = head.next;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        let second = slow.next;
        let prev = null;
        slow.next = null;
        while(second){
            const next = second.next;
            second.next = prev;
            prev = second;
            second = next; 
        }

        let first = head;
        second = prev;
        while(second){
            let temp1 = first.next, temp2 = second.next;
            first.next = second;
            second.next = temp1;
            first = temp1;
            second = temp2;
        }
    }
}
