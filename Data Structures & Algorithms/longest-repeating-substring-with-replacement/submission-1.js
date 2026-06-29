class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left =0, right = 0, max =0, res = 0;
        const hashMap = new Array(26).fill(0);
        while(right < s.length){
            hashMap[s.charCodeAt(right) - 'A'.charCodeAt(0)]++;
            //Check max with right pointer only as left pointer can only decrease max which we're using to maintain global maxima
            max = Math.max(max, hashMap[s.charCodeAt(right) - 'A'.charCodeAt(0)]);
            while(right - left + 1 - max > k){
                hashMap[s.charCodeAt(left) - 'A'.charCodeAt(0)]--;
                left++;
            }
            res = Math.max(res, right - left + 1);
            right++;
        }
        return res;
    }
}