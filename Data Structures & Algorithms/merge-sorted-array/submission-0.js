class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        const left = new Array(m);
        for(let i=0; i<m; i++){
            left[i] = nums1[i];
        }

        let i=0, j=0, k = 0;
        while(i<m && j<n){
            if(left[i] <= nums2[j]){
                nums1[k] = left[i];
                i++;
            } else {
                nums1[k] = nums2[j];
                j++;
            }
            k++;
        }
        while(i<m){
            nums1[k] = left[i];
            i++;
            k++;
        }
        while(k<n){
            nums1[k] = nums2[j];
            j++;
            k++;
        }
        return nums1;
    }
}
