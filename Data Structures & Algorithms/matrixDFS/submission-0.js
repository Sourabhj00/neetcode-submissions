class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid) {
        const ROW = grid.length, COL = grid[0].length;
        function dfs(r,c, visit) {
            if( Math.min(r,c) < 0 || r == ROW || c == COL || grid[r][c] == 1 || visit.has(`${r}-${c}`)){
                return 0;
            }
            if(r == ROW -1 && c == COL -1){
                return 1;
            }

            visit.add(`${r}-${c}`);
            let count = 0;
            count += dfs(r-1,c, visit);
            count += dfs(r+1,c, visit);
            count += dfs(r,c-1, visit);
            count += dfs(r,c+1, visit);

            visit.delete(`${r}-${c}`);
            return count;
        }

        return dfs(0,0, new Set());
    }
}
