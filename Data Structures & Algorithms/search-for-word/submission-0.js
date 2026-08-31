class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const ROW = board.length, COL = board[0].length;
        const neighbor = [[0,1],[0,-1],[1,0], [-1,0]];
        const path = new Set();
        let res = false
        const dfs = (r,c,i) => {
            if(i == word.length){
                return true;
            }
            if(Math.min(r,c) < 0 || r >= ROW || c >= COL || path.has(`${r}-${c}`) || word[i] !== board[r][c]){
                return false;
            }
            path.add(`${r}-${c}`);
            for(const [RO, CO] of neighbor){
                res = res || dfs(r + RO, c + CO, i+1);
            }
            path.delete(`${r}-${c}`);
            return res;
        }
        for(let i=0; i< ROW; i++){
            for(let j=0; j< COL; j++){
                dfs(i,j,0);
            }
        }
        return res;
    }
}
