class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let l = 0, r = 0;
        let ans = Infinity;
        let sum = 0;
        while(r < nums.length){
            sum += nums[r];
            while(sum >= target){
                ans = Math.min(ans, r - l + 1);
                sum -= nums[l];
                l++;
            }
            r++;
        }
        return ans == Infinity ? 0 : ans;
    }
}
