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
     * @return {boolean}
     */
    isBalanced(root) {
        let isBalanced = true;
        const height = (node) => {
            if(!node){
                return 0;
            }
            let leftMax = height(node.left);
            let rightMax = height(node.right);
            if(Math.abs(leftMax - rightMax) > 1){
                isBalanced = false;
            }
            return Math.max(leftMax,rightMax) + 1;
        }
        height(root);
        return isBalanced;
    }
}
