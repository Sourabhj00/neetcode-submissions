class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        const isPalindrome = (string, l, r) => {
            while(l<r){
                if(string[l] == string[r]){
                    l++;
                    r--;
                } else {
                    return false;
                }
            }
            return true;
        }
        let l=0, r= s.length - 1;
        while(l < r){
            if(s[l] == s[r]){
                l++;
                r--
            } else {
                return isPalindrome(s, l+1, r) || isPalindrome(s,l,r-1);
            }
        }
        return true;
    }
}
