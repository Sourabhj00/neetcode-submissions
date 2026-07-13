class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowSet = new Map();
        const colSet = new Map();
        const squareSet = new Map();
        for(let i=0; i< board.length;i++){
            for(let j=0; j< board[0].length;j++){
                if(board[i][j] === '.')continue;
                const key = `${Math.floor(i/3)}${Math.floor(j/3)}`;
                const currEl = board[i][j];
                if((rowSet.has(i) && rowSet.get(i).has(currEl)) ||
                (colSet.has(j) && colSet.get(j).has(currEl)) ||
                (squareSet.has(key) && squareSet.get(key).has(currEl))){
                    return false;
                }
                if(!rowSet.has(i)){
                    rowSet.set(i,new Set());
                }
                if(!colSet.has(j)){
                    colSet.set(j,new Set());
                }
                if(!squareSet.has(key)){
                    squareSet.set(key, new Set());
                }
                rowSet.get(i).add(currEl);
                colSet.get(j).add(currEl);
                squareSet.get(key).add(currEl);
            }
        }
        return true;
    }
}
