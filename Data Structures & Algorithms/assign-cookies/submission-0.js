class Solution {
    /**
     * @param {number[]} g
     * @param {number[]} s
     * @return {number}
     */
    findContentChildren(g, s) {
        g.sort((a,b) => a-b);
        s.sort((a,b) => a-b);
        let i=0;
        for(let j=0; j< s.length && i < g.length; j++){
            if(s[j] >= g[i]) i++;
        }
        return i;
    }
}
