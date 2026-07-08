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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(null);
        let curr = dummy;
        let carry = 0;
        while(l1 && l2){
            const sum = l1.val + l2.val + carry;
            carry = Math.floor(sum/10);
            curr.next = new ListNode(sum%10);
            l1 = l1.next;
            l2 = l2.next;
            curr = curr.next;
        }
        while(l1){
            const sum = l1.val + carry;
            carry = Math.floor(sum/10);
            curr.next = new ListNode(sum%10);
            l1 = l1.next;
            curr = curr.next;
        }
        while(l2){
            const sum = l2.val + carry;
            carry = Math.floor(sum/10);
            curr.next = new ListNode(sum%10);
            l2 = l2.next;
            curr = curr.next;
        }
        if(carry){
            curr.next = new ListNode(carry);
        }
        return dummy.next;
    }
}
