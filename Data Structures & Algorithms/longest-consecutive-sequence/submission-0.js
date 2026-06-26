class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let max = 0;
        if(nums.length === 0) return 0;
        let localMax = 0;
        const hashSet = new Set(nums);
        for(const num of nums){
            if(hashSet.has(num -1)){
                continue;
            }
            let curr = num;
            while(hashSet.has(curr+1)){
                localMax++;
                curr++;
            }
            localMax++;
            max = Math.max(max,localMax);
            localMax = 0;
        }
        return max;
    }
}
