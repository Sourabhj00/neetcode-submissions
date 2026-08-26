class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        const total = nums.reduce((acc, n) => acc + n,0);
        let leftSum = 0;
        for(let i=0; i<nums.length; i++){
            const rightSum = total - leftSum - nums[i];
            if(leftSum == rightSum){
                return i;
            }
            leftSum += nums[i];
        }
        return -1;
    }
}
