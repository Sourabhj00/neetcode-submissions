class Solution {
    /**
     * @param {number[][]}
     * @returns {number}
     */
    shortestPath(grid) {
        const ROW = grid.length, COL = grid[0].length;
        let visited = new Set();
        let queue = new Deque();
        let length = 0;

if(grid[0][0] == 1 || grid[ROW -1][COL -1] == 1){
    return -1;
}
        queue.pushBack([0,0]);
        visited.add(`0-0`);

        while(queue.size() >0){
            const len = queue.size();
            for(let i=0; i< len;i++){
                let [r,c] = queue.popFront();
                if(r == ROW -1 && c == COL - 1){
                    return length;
                }

                const dir = [[0,1], [0,-1], [1,0], [-1,0]];
                for(const [dr,dc] of dir){
                    const newR = r + dr, newC = c + dc;
                    if(Math.min(newR,newC) <0 || newR == ROW || newC == COL || grid[newR][newC] == 1 || visited.has(`${newR}-${newC}`)){
                        continue;
                    }
                    queue.pushBack([newR, newC]);
                    visited.add(`${newR}-${newC}`);
                }
            }
            length++;
        }
        return -1;
    }
}
