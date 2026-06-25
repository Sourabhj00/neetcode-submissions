class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = strs.reduce((acc,str) => {
            const arr = new Array(26).fill(0);
            for(let i=0; i<str.length;i++){
                arr[str.charCodeAt(i) - 97]++;
            }
            if(acc[arr.join('#')]){
                acc[arr.join('#')].push(str);
            } else {
                acc[arr.join('#')] = [str];
            }
            return acc;
        },{})
        const ans = [];
        for(let i of Object.values(map)){
            ans.push(i);
        }
        return ans;
    }
}
