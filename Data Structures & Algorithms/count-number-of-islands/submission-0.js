class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROW = grid.length, COL = grid[0].length;
        let island = 0;
        let visited = new Set();
        const dfs = (r,c, visited) => {
            if(Math.min(r,c) <0 || r >= ROW || c >= COL || grid[r][c] == '0' || visited.has(`${r}-${c}`)){
                return;
            }
            visited.add(`${r}-${c}`);
            dfs(r-1,c,visited);
            dfs(r+1,c,visited);
            dfs(r,c-1,visited);
            dfs(r,c+1,visited);
        }
        for(let i=0; i< ROW; i++){
            for(let j=0; j< COL; j++){
                if(grid[i][j] == '1' && !visited.has(`${i}-${j}`)){
                    island++;
                    dfs(i,j,visited);
                }
            }
        }
        return island;
    }
}
