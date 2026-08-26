class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let l=0, r = 0;

        while(r<nums.length){
            let counter = 1;
            while(r + 1< nums.length && nums[r] == nums[r+1]){
                counter++;
                r++;
            }
            for(let i=0; i< Math.min(2,counter); i++){
                nums[l] = nums[r];
                l++;
            }
            r++;
        }
        return l;
    }
}
