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
     * @param {number} key
     * @return {TreeNode}
     */

    findMin(root){
        let curr = root;
        while(curr && curr.left){
            curr = curr.left;
        }
        return curr;
    }

    deleteNode(root, key) {
        if(!root){
            return root;
        }

        if(root.val < key){
            root.right = this.deleteNode(root.right,key);
        } else if (root.val > key){
            root.left = this.deleteNode(root.left,key)
        } else {
            if(!root.left){
                return root.right;
            }
            if(!root.right){
                return root.left;
            }
            const min = this.findMin(root.right);
            root.val = min.val;
            root.right = this.deleteNode(root.right, min.val);
        }
        return root;
    }
}
