class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let ans = 0, sum = 0;
        const hashMap = new Map();
        hashMap.set(0, 1);

        for(const n of nums){
            sum += n;
            const diff = sum - k;
            ans += hashMap.get(diff) || 0;
            hashMap.set(sum, (hashMap.get(sum) || 0) + 1);
        }
        return ans;
    }
}
