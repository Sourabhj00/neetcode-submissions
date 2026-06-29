class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left =0, right = 0, max =0;
        const hashMap = new Array(26).fill(0);
        while(right < s.length){
            hashMap[s.charCodeAt(right) - 'A'.charCodeAt(0)]++;
            const maxFreq = Math.max(...hashMap);
            while(right - left + 1 - maxFreq > k){
                hashMap[s.charCodeAt(left) - 'A'.charCodeAt(0)]--;
                left++;
            }
            max = Math.max(max,right - left + 1);
            right++;
        }
        return max;
    }
}
