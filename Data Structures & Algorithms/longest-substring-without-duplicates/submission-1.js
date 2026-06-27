class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left=0,right=0;
        const hashMap = new Array(128).fill(0);
        let counter =0;
        let ans = 0;
        while(right<s.length){
            if(hashMap[s.charCodeAt(right)] >0){
                counter++;
            }
            hashMap[s.charCodeAt(right)]++;
            right++
            while(counter > 0){
                if(hashMap[s.charCodeAt(left++)]-- >1){
                    counter--;
                }
            }
            ans = Math.max(ans,right-left);
        }
        return ans;
    }
}
