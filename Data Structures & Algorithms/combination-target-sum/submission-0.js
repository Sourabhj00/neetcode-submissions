class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let tar = target;
        const res = [];
        const subset = [];
        const dfs = (i, target) => {
            if(target == 0){
                res.push([...subset]);
                return;
            }
            if(target<0 || i >= nums.length) return;
            subset.push(nums[i]);
            dfs(i, target - nums[i]);
            subset.pop();
            dfs(i+1, target);
        }
        dfs(0,tar)
        return res;
    }
}
