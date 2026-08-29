class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let l = 0, r = nums.length - 1;
        while(l <= r){
            const mid = l + Math.floor((r-l)/2);
            const m = nums[mid];
            if(m > target){
                r = mid - 1;
            } else if (m == target) {
                return mid;
            } else {
                l = mid + 1;
            }
        }
        return l;
    }
}
