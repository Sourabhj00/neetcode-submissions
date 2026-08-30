class Solution {
    /**
     * @param {number[]} gifts
     * @param {number} k
     * @return {number}
     */
    pickGifts(gifts, k) {
        const maxPQ = new MaxPriorityQueue();
        for(const g of gifts){
            maxPQ.enqueue(g);
        }
        for(let i=0; i< k; i++){
            const curr = maxPQ.dequeue();
            maxPQ.enqueue(Math.floor(Math.sqrt(curr)));
        }
        let res = 0;
        while(!maxPQ.isEmpty()){
            res += maxPQ.dequeue();
        }
        return res;
    }
}
