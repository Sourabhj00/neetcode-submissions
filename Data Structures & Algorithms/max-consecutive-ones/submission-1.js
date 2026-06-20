class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let ans = 0, localMax = 0;
        for(const num of nums){
            if(num === 1){
                localMax++;
            } else {
                ans = Math.max(ans,localMax);
                localMax = 0;
            }
        }
        return Math.max(ans,localMax);
    }
}
