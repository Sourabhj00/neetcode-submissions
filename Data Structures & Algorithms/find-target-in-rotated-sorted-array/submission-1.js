class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const n = nums.length;
        let left = 0, right = n-1;
        while(left<right){
            const mid = left + Math.floor((right - left)/2);
            if(nums[mid] > nums[right]){
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        const pivot = right;
        const l = this.binarySearch(nums,0,pivot-1, target);
        const r = this.binarySearch(nums,pivot, n -1, target);
        return Math.max(l,r)
    }

    binarySearch(arr,left,right,target){
        while(left<=right){
            const mid = left + Math.floor((right - left)/2);
            if(arr[mid]<target){
                left = mid + 1;
            } else if (arr[mid]>target){
                right = mid - 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
}
