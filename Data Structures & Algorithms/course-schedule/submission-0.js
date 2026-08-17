class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adjMap = new Map();
        for(let i=0; i< numCourses; i++){
            adjMap.set(i, []);
        }
        for(const [crs, pre] of prerequisites){
            adjMap.get(crs).push(pre);
        }
        const visited = new Set();

        const dfs = (crs) => {
            if(visited.has(crs)){
                return false;
            }
            if(adjMap.get(crs).length == 0){
                return true;
            }
            visited.add(crs);
            for(const neighbour of adjMap.get(crs)){
                if(!dfs(neighbour)){
                    return false;
                }
            }
            visited.delete(crs);
            adjMap.set(crs,[]);
            return true;
        }

        for(let i=0; i< numCourses; i++){
            if(!dfs(i)){
                return false;
            }
        }
        return true;
    }
}
