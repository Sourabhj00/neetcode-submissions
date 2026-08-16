class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        const ROW = grid.length, COL = grid[0].length;
        if(grid[0][0] == 1|| grid[ROW -1][COL -1] == 1){
            return -1;
        }
        let visited = new Set();
        let queue = new Deque();
        queue.pushBack([0,0]);
        visited.add(`0-0`);
        let length = 1;

        while(queue.size() > 0){
            const LEN = queue.size();
            for(let i=0; i< LEN; i++){
                let [r,c] = queue.popFront();
                if(r === ROW -1 && c === COL -1){
                    return length;
                }

                const dir = [[0,1], [0,-1], [1,0], [-1,0], [-1,-1], [1,1], [-1,1], [1,-1]];
                for(const [dr, dc] of dir){
                    const newR = r + dr, newC = c + dc;
                    if(Math.min(newR,newC) <0 || newR == ROW || newC == COL || grid[newR][newC] == 1 || visited.has(`${newR}-${newC}`)){
                        continue;
                    }
                    queue.pushBack([newR,newC]);
                    visited.add(`${newR}-${newC}`);
                }
            }
            length++;
        }
        return -1;
    }
}
