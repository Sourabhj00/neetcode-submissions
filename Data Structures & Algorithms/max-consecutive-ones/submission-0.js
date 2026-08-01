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
                ans = Math.max(ans,localMax);
            } else {
                localMax = 0;
            }
        }
        return ans;
    }
}
