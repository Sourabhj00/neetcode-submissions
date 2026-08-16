class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROW = grid.length, COL = grid[0].length;
        let queue = new Deque();
        let fresh = 0
        for(let i=0; i< ROW; i++){
            for(let j=0; j< COL ; j++){
                if(grid[i][j] == 1) fresh++;
                if(grid[i][j] == 2){
                    queue.pushBack([i,j]);
                }
            }
        }
        if(fresh == 0) return 0;
        if(queue.isEmpty()){
            return -1;
        }
        let length = 0;
        while(!queue.isEmpty() && fresh >0){
            let len = queue.size();
            for(let i=0; i< len; i++){
                const [r,c] = queue.popFront();
                const dir = [[0,1], [0,-1], [1,0], [-1,0]];
                for(const [dr,dc] of dir){
                    const nr = r + dr, nc = c + dc;
                    if(Math.min(nr,nc) < 0 || nr == ROW || nc == COL || grid[nr][nc] != 1){
                        continue;
                    }
                    grid[nr][nc] = 2;
                    fresh--;
                    queue.pushBack([nr,nc]);
                }
            }
            length++;
        }
        return fresh == 0 ? length : -1;
    }
}
