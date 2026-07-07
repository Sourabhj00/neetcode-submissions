class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        for(let i=0;i<nums.length;i++){
            let val = Math.abs(nums[i]);
            if(nums[val -1] < 0){
                return val;
            }
            nums[val -1] *= -1;
        }
    }
}
