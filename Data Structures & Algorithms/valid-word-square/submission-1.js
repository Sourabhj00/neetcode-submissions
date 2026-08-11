class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    validWordSquare(words) {
        for(let i=0; i<words.length;i++){
            for(let j=0; j< words[i].length; j++){
                if(j >= words.length || i >= words[j].length || words[i][j] !== words[j][i]){
                    return false;
                }
            }
        }
        return true;
    }
}
