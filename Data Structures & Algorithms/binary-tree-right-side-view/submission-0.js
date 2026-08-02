/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        const q = new Queue();
        const res = [];
        if(root){
            q.enqueue(root);
        }
        while(q.size() > 0){
            const len = q.size();
            for(let i=0; i< len; i++){
                const curr = q.dequeue();
                if(i == len -1){
                    res.push(curr.val);
                }
                if(curr.left){
                    q.enqueue(curr.left);
                }
                if(curr.right){
                    q.enqueue(curr.right);
                }
            }
        }
        return res;
    }
}
