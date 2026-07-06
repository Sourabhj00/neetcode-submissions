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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let curr = head;
        if(curr.next == null){
            return null;
        }
        let len = 0;
        while(curr !== null){
            curr = curr.next;
            len++;
        }
        curr = head;
        if(len == n){
            curr = curr.next;
            head = curr;
            return head;
        }
        const rem = len - n;
        let i=1;
        while(i<rem){
            curr = curr.next;
            i++;
        }
        curr.next = curr.next.next;
        return head;
        
    }
}