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
     * @return {number[][]}
     */
    levelOrder(root) {
        const queue = new Queue();
        if(root){
            queue.enqueue(root);
        }
        let level = 0;
        let res = [];
        while(queue.size() > 0){
            const queueLen = queue.size();
            for(let i=0; i< queueLen;i++){
                const curr = queue.dequeue();
                if(!res[level]){
                    res[level] = [];
                }
                res[level].push(curr.val);
                if(curr.left){
                    queue.enqueue(curr.left);
                }
                if(curr.right){
                    queue.enqueue(curr.right);
                }
            }
            level++;
        }
        return res;
    }
}
