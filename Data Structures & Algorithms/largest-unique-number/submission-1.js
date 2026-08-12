class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    largestUniqueNumber(nums) {
        const hashObj = nums.reduce((acc,num) => {
            acc[num] = (acc[num] || 0) + 1;
            return acc;
        }, {})
        let res = -1;
        for(const [key,val] of Object.entries(hashObj)){
            if(Number(key) > res && Number(val) < 2){
                res = Number(key);
            }
        }
        return res;
    }
}
