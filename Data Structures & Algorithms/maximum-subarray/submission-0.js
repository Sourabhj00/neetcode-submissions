class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = nums[0];
        let sum = 0;

        for(const num of nums){
            sum = Math.max(sum,0);
            sum += num;
            maxSum = Math.max(sum,maxSum);
        }
        return maxSum;
    }
}
