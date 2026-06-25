class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashMap = nums.reduce((acc,num) => {acc[num] = (acc[num] ?? 0) + 1; return acc},{});
        const mpq = new MinPriorityQueue((x) => x[1]);
        for(const [number,freq] of Object.entries(hashMap)){
            mpq.enqueue([number,freq]);
            if(mpq.size() > k) mpq.dequeue();
        }

        const res = [];
        for(let i=0; i< k; i++){
            const [num, freq] = mpq.dequeue();
            res.push(num)
        }
        return res;
    }
}
