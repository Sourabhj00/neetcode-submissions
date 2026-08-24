class Solution {
    /**
     * @param {string} keyboard
     * @param {string} word
     * @return {number}
     */
    calculateTime(keyboard, word) {
        let currIdx = 0;
        const obj = {};
        for(let i=0; i< keyboard.length; i++){
            obj[keyboard[i]] = i;
        }
        let ans = 0;
        for(let i=0; i< word.length; i++){
            ans += Math.abs(obj[word[i]] - currIdx);
            currIdx = obj[word[i]];
        }
        return ans;
    }
}
