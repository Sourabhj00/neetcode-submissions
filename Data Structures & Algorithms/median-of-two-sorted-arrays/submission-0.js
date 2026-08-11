class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const TOTAL = nums1.length + nums2.length;
        const HALF = Math.floor(TOTAL/2);
        if(nums1.length > nums2.length){
            [nums1,nums2] = [nums2,nums1];
        }
        let l = 0, r = nums1.length - 1;
        while(true){
            const midA = Math.floor((l + r)/2);
            const midB = HALF - midA - 2;
            const Aleft = midA >= 0 ? nums1[midA] : -Infinity;
            const Aright = (midA + 1) < nums1.length ? nums1[midA + 1] : Infinity;
            const Bleft = midB >= 0 ? nums2[midB] : -Infinity;
            const Bright = (midB + 1) < nums2.length ? nums2[midB + 1] : Infinity;

            if(Aleft <= Bright && Bleft <= Aright){
                if(TOTAL % 2){
                    return Math.min(Aright, Bright);
                } else {
                    return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
                }
            } else if (Aleft > Bright){
                r = midA - 1;
            } else {
                l = midA + 1;
            }
        }
    }
}
