class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const board = Array.from({length: n}, () => Array(n).fill('.'));
        const res = [];
        this.NQueens(board, res, n, 0);
        return res;
    }

    NQueens(board, res, n, row){
        if(row == n){
            res.push(board.map(row => row.join('')));
            return;
        }
        for(let i=0; i<n; i++){
            if(this.isSafe(board, n, row, i)){
                board[row][i] = 'Q';
                this.NQueens(board,res,n, row + 1);
                board[row][i] = '.';
            }
        }
    }

    isSafe(board,n, row, col){
        for(let i=0; i<n; i++){
            if(board[row][i] == 'Q'){
                return false;
            }
        }

        for(let i=0; i<n; i++){
            if(board[i][col] == 'Q'){
                return false;
            }
        }

        for(let i=row-1, j=col-1; i >=0 && j>=0; i--,j--){
            if(board[i][j] == 'Q'){
                return false;
            }
        }

        for(let i=row-1, j=col+1; i>= 0 && j < n; i--, j++){
            if(board[i][j] == 'Q'){
                return false;
            }
        }
        return true;
    }
}
