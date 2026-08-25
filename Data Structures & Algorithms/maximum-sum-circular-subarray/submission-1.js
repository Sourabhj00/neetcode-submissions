class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let globalMax = nums[0], globalMin = nums[0];
        let curMax = 0, curMin = 0;
        let total = 0;

        for(const num of nums){
            curMax = Math.max(curMax + num, num);
            curMin = Math.min(curMin + num, num);
            total += num;
            globalMax = Math.max(curMax, globalMax);
            globalMin = Math.min(globalMin, curMin);
        }

        return globalMax < 0 ? globalMax : Math.max(globalMax, total - globalMin);
    }
}
