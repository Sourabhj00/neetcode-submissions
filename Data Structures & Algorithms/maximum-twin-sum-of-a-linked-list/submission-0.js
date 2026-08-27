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
     * @return {number}
     */
    pairSum(head) {
        let s = head, f = head;
        let max = -Infinity;
        let helper = [];
        while(f !== null && f.next !== null){
            helper.push(s.val);
            s = s.next;
            f = f.next.next;
        }
        while(s !== null){
            const sum = helper.pop() + s.val;
            max = Math.max(sum,max);
            s = s.next;
        }
        return max;
    }
}
