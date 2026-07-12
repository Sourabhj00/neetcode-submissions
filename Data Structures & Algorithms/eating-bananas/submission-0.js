class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let minK = 1, maxK = Math.max(...piles);
        let ans = Infinity;
        while(minK <= maxK){
            let hours = 0;
            const rate = minK + Math.floor((maxK - minK)/2);
            for(const pile of piles){
                hours += Math.ceil(pile/rate); 
            }
            if(hours>h){
                minK = rate + 1;
            } else {
                ans = Math.min(ans,rate);
                maxK = rate - 1;
            }
        }
        return ans;
    }
}
