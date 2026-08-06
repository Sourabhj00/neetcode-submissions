class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [];
        stack.push([0, heights[0]]);
        let maxArea = 0;
        let i = 1;
        while (i < heights.length) {
            if (heights[i] >= stack[stack.length - 1][1]) {
                stack.push([i, heights[i]]);
            } else {
                let remIdx, height;
                while (stack.length > 0 && heights[i] < stack[stack.length - 1][1]) {
                    [remIdx, height] = stack.pop();
                    maxArea = Math.max(maxArea, height * (i - remIdx));
                }
                stack.push([remIdx, heights[i]]);
            }
            i++;
        }
        while (stack.length > 0) {
            const n = heights.length;
            const [idx, height] = stack.pop();
            maxArea = Math.max(maxArea, height * (n - idx));
        }
        return maxArea;
    }
}
