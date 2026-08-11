class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let res = 0, i=0, j=1;
        while(j < s.length){
            res += Math.abs(s.charCodeAt(j) - s.charCodeAt(i));
            i++;
            j++
        }
        return res;
    }
}
