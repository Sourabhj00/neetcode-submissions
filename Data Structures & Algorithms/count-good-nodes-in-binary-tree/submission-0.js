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
     * @return {number}
     */
    goodNodes(root) {
        let goodNode = 0;
        const traversal = (node, max) => {
            if(!node){
                return;
            }
            if(node.val >= max){
                goodNode++;
                max = node.val;
            }
            traversal(node.left,max);
            traversal(node.right,max);
        }
        traversal(root,root.val);
        return goodNode;
    }
}
