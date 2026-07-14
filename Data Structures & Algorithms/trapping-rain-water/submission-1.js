class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if(!height.length) return 0;
        let left =0, right = height.length -1;
        let leftMax = height[left], rightMax = height[right];
        let res = 0;
        while(left < right){
            if(leftMax < rightMax){
                left++;
                leftMax = Math.max(leftMax,height[left]);
                res+= Math.min(leftMax) - height[left];
            } else {
                right--;
                rightMax = Math.max(rightMax,height[right]);
                res += rightMax - height[right];
            }
        }
        return res;
    }
}
