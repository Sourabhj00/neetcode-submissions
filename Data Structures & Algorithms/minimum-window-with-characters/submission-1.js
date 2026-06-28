class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(s.length < t.length) return "";
        const hashMap = new Array(128).fill(0);
        let counter = 0;
        for(const char of t){
            hashMap[char.charCodeAt(0)]++;
            counter++;
        }
        let left=0, right = 0;
        let begin = 0, body = Infinity;
        while(right < s.length){
            if(hashMap[s.charCodeAt(right)] > 0){
                counter--;
            }
            hashMap[s.charCodeAt(right)]--;
            right++;
            while(counter == 0){
                if(right - left < body){
                    body = right - left;
                    begin = left;
                }
                if(hashMap[s.charCodeAt(left)] == 0){
                    counter++;
                }
                hashMap[s.charCodeAt(left)]++;
                left++;
            }
        }
        return body === Infinity ? "" : s.slice(begin, begin + body);
    }
}
