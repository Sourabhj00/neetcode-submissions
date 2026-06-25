class Solution {
    alphaNum(c) {
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }
    
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left =0, right = s.length -1;
        s = s.toLowerCase();
        while(left < right){
            while (left < right && !this.alphaNum(s[left])) {
                left++;
            }
            while (right > left && !this.alphaNum(s[right])) {
                right--;
            }
            if(s[left] !== s[right]){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
