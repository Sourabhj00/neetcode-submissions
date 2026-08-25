class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let l = 0;
        let ans = 0;
        let total = 0;
        const AVG = threshold * k;
        for(let r =0; r < arr.length; r++){
            while(r - l + 1> k){
                total -= arr[l];
                l++;
            }
            total += arr[r];
            if(r - l + 1== k && total >= AVG){
                ans++;
            }
        }
        return ans;
    }
}
