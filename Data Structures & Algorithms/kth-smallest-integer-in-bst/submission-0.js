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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let target = k;
        const inorderTraversal = (node) => {
            if(!node){
                return null;
            }
            const left = inorderTraversal(node.left);
            if(left !== null){
                return left;
            }
            target--;
            if(target ==0){
                return node;
            }
            return inorderTraversal(node.right);
            
        }
        return inorderTraversal(root).val;
    }
}
