class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        const prefix = new Array(nums.length).fill(0), postfix = new Array(nums.length).fill(0);
        for(let i=1; i<nums.length;i++){
            prefix[i] = prefix[i-1] + nums[i-1];
        }
        for(let i=nums.length - 2; i>=0;i--){
            postfix[i] = postfix[i+1] + nums[i+1];
        }
        for(let i=0; i<prefix.length;i++){
            if(prefix[i] === postfix[i]){
                return i;
            }
        }
        return -1;
    }
}
