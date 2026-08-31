class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let l = 0, r = 0;
        let q = new Deque();
        const res = [];
        while(r < nums.length){
            while(!q.isEmpty() && nums[q.back()] < nums[r]){
                q.popBack();
            }
            q.pushBack(r);
            if(l > q.front()){
                q.popFront();
            }
            if(r + 1 >= k){
                res.push(nums[q.front()]);
                l++;
            }
            r++;
        }
        return res;
    }
}
