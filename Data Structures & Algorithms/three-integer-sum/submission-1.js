class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b);
        const res = [];
        for(let i=0;i<nums.length;i++){
            if( i>0 && nums[i] === nums[i-1]) continue;
            const target = nums[i] * -1;
            const hashMap = new Set();
            for(let j=i+1; j<nums.length; j++){
                    if(hashMap.has(target - nums[j])){
                        res.push([nums[i], nums[j], target - nums[j]]);
                        while (j + 1 < nums.length && nums[j] === nums[j + 1]) j++;
                    }
                    hashMap.add(nums[j]);
            }
        }
        return res;
    }
}
