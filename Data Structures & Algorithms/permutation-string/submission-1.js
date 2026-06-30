class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
        const hashArr = new Array(26).fill(0);
        let counter = 0;
        for(const s of s1){
            if(hashArr[s.charCodeAt(0) - 97] == 0){
                counter++;
            }
            hashArr[s.charCodeAt(0) - 97] = hashArr[s.charCodeAt(0) - 97] + 1;
        }
        let left =0, right = 0;
        while(right < s1.length){
            if(hashArr[s2.charCodeAt(right) - 97] == 0){
                counter++;
            }
            if(hashArr[s2.charCodeAt(right) - 97] == 1){
                counter--;
            }
            hashArr[s2.charCodeAt(right) - 97]--;
            right++;
        }
        if(counter == 0){
            return true;
        }
        while(right < s2.length){
            if(hashArr[s2.charCodeAt(right) - 97] == 0){
                counter++;
            }
            if(hashArr[s2.charCodeAt(right) - 97] == 1){
                counter--;
            }
            hashArr[s2.charCodeAt(right) - 97]--;
            right++;
            if(hashArr[s2.charCodeAt(left) - 97] == -1){
                counter--;
            }
            if(hashArr[s2.charCodeAt(left) - 97] == 0){
                counter++;
            }
            if(counter ==0){
                return true;
            }
            hashArr[s2.charCodeAt(left) - 97]++;
            left++;
        }
        return false;
    }
}
