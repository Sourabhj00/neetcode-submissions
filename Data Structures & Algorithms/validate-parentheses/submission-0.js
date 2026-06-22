class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let res = [];
        const hashObj = {'(': ')', '[': ']', '{': '}'};
        for(let i=0; i< s.length; i++){
            if(hashObj[s[i]]){
                res.push(s[i]);
            } else{
                if(s[i] !== hashObj[res.pop()]){
                    return false;
                }
            }
        }
        return !res.length;
    }
}
