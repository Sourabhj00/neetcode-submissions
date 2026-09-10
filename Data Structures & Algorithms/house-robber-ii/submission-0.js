class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        return Math.max(nums[0], this.helper(nums.slice(1)), this.helper(nums.slice(0,-1)));
    }

    helper(nums){
        let h1 = 0, h2 = 0;
        for(const num of nums){
            const temp = Math.max(h1, h2 + num);
            h2 = h1;
            h1 = temp;
        }
        return h1;
    }
}
