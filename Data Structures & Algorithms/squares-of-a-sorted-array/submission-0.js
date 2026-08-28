class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let l=0, r = nums.length - 1;
        const ans = new Array(nums.length);
        let pointer = nums.length - 1;
        while(l<=r){
            const left = nums[l] * nums[l];
            const right = nums[r] * nums[r];
            if(left > right){
                ans[pointer] = left;
                l++;
            } else {
                ans[pointer] = right;
                r--;
            }
            pointer--;
        }
        return ans;
    }
}
