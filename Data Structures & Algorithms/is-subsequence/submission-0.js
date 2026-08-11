class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let j = 0;
        for(let i=0;i<t.length;i++){
            if(j < s.length && (s[j] == t[i])){
                j++;
            }
        }
        return j == s.length;
    }
}
