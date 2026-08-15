class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const ROW = grid.length, COL = grid[0].length;
        let maxArea = 0;

        const dfs = (r,c) => {
            if(Math.min(r,c) < 0 || r >= ROW || c >= COL || grid[r][c] == 0){
                return 0;
            }
            grid[r][c] = 0;
            let count = 1;
            count += dfs(r-1,c);
            count += dfs(r+1,c);
            count += dfs(r,c-1);
            count += dfs(r,c+1);
            return count;
        }

        for(let i=0;i<ROW;i++){
            for(let j=0; j< COL; j++){
                if(grid[i][j] == 1){
                    maxArea = Math.max(maxArea, dfs(i,j));
                }
            }
        }

        return maxArea;
    }
}
