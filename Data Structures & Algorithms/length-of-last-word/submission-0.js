class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let res = 0;
        let j = s.length -1;
        while(s[j] == ' '){
            j--;
        }
        while(j >= 0 && s[j] !== ' '){
            res++;
            j--;
        }
        return res;
    }
}
