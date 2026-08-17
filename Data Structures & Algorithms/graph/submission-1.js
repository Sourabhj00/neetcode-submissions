class Graph {
    constructor() {
        this.adjMap = new Map();
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {void}
     */
    addEdge(src, dst) {
        if(!this.adjMap.has(src)){
            this.adjMap.set(src,[]);
        }
        if(!this.adjMap.has(dst)){
            this.adjMap.set(dst,[]);
        }
        const neighbours = this.adjMap.get(src);
        if(neighbours.includes(dst)){
            return;
        }
        neighbours.push(dst);
        this.adjMap.set(src,neighbours);
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    removeEdge(src, dst) {
        if(!this.adjMap.has(src)){
            return false;
        }
        const neighbours = this.adjMap.get(src);
        const remIdx = neighbours.indexOf(dst);
        if(remIdx < 0){
            return false;
        } else {
            neighbours.splice(remIdx,1);
        }
        this.adjMap.set(src,neighbours);
        return true;
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    hasPath(src, dst) {
        const visited = new Set();
        const queue = new Deque();
        queue.pushBack(src);

        const bfs = (src,dst, visited) => {
            while(!queue.isEmpty()){
                const LEN = queue.size();
                for(let i=0; i<LEN; i++){
                    const node = queue.popFront();
                    if(node == dst){
                        return true;
                    }
                    if(visited.has(node)){
                        continue;
                    }
                    visited.add(node);
                    const neighbours = this.adjMap.get(node);
                    for(const neighbour of neighbours){
                        queue.pushBack(neighbour);
                    }
                }
            }
            return false;
        }
        return bfs(src,dst,visited);
    }
}