class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    canPermutePalindrome(s) {
        const hashObj = {};
        for(let i=0; i< s.length;i++){
            hashObj[s[i]] = (hashObj[s[i]] ?? 0) + 1;
        }
        let odds = 0;
        for(const val of Object.values(hashObj)){
            if(val % 2 !== 0){
                odds++;
            }
        }
        return odds < 2;
    }
}
