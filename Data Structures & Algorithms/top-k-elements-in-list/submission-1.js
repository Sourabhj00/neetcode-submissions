class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashMap = nums.reduce((acc,num) => {
            acc[num] = (acc[num] ?? 0) + 1;
            return acc
            },{});
        const arr = new Array(nums.length + 1);
        for(const[num,freq] of Object.entries(hashMap)){
            if(!arr[freq]){
                arr[freq] = [];
            }
            arr[freq].push(parseInt(num));
        }
        const res = []
        for(let i=arr.length -1; i>=0;i--){
            if (arr[i]) {
                for(const n of arr[i]){
                    res.push(n);
                    if(res.length === k){
                        return res;
                    }
                }
            }
        }
    }
}
