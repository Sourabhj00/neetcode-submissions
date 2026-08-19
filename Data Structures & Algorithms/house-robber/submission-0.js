class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let h1 =0, h2 =0;
        for(let i=0; i< nums.length; i++){
            const temp = Math.max(h1 + nums[i], h2);
            h1 = h2;
            h2 = temp;
        }
        return h2;
    }
}
