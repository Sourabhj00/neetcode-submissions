class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        for(let i=0;i<nums.length;i++){
            if(nums[nums[i] -1] < 0){
                return nums[i];
            }
            nums[nums[i] -1] *= -1;
        }
    }
}
