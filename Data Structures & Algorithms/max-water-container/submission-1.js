class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left =0, right = heights.length - 1, max = 0;
        while(left < right){
            const len = Math.min(heights[left], heights[right]);
            const localMax = len * (right - left);
            max = Math.max(localMax, max);
            if(heights[left] < heights[right]){
                left++
            } else right--;
        }
        return max;
    }
}
