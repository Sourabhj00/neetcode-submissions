class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if(!height.length) return 0;
        const leftMax = new Array(height.length).fill(0);
        const rightMax = new Array(height.length).fill(0);
        let res = 0;
        leftMax[0]=height[0];
        rightMax[height.length - 1] = height[height.length - 1];
        for(let i=1; i< height.length;i++){
            leftMax[i] = Math.max(leftMax[i-1], height[i]);
        }
        for(let j= height.length-2;j>= 0;j--){
            rightMax[j]= Math.max(rightMax[j+1], height[j]);
        }

        for(let i=0;i<height.length;i++){
            res += Math.min(leftMax[i],rightMax[i]) - height[i];
        }
        return res;
    }
}
