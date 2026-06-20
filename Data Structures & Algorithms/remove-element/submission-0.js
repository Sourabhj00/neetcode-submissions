class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0, left=0,right = nums.length-1;
        while(left <= right){
            if(nums[left] === val){
                const temp = nums[left];
                nums[left] = nums[right];
                nums[right] = temp;
                right--; 
            } else {
                k++;
                left++;
            }
        }
        return k;
    }
}
