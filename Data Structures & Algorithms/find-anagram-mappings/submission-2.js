class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    anagramMappings(nums1, nums2) {
        const res = [];
        const hashObj = {};
        for(let i=0; i< nums2.length; i++){
            hashObj[nums2[i]] = i;
        }
        for(let i=0; i< nums1.length; i++){
            res.push(hashObj[nums1[i]]);
        }
        return res;
    }
}
