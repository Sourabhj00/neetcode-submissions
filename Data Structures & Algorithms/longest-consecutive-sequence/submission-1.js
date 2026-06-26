class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let max = 0;
        const hashSet = new Set(nums);
        for(const num of nums){
            if(hashSet.has(num -1)){
                continue;
            }
            let curr = 1;
            while(hashSet.has(num + curr)){
                curr++;
            }
            max = Math.max(max,curr);
        }
        return max;
    }
}
