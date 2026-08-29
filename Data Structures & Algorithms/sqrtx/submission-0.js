class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let l = 0, r = x, res =0;
        while(l <= r){
            const mid = l + Math.floor((r-l)/2);
            const sq = mid * mid;
            if(sq > x){
                r = mid - 1;
            } else if (sq < x){
                l = mid + 1;
                res = mid;
            } else {
                return mid;
            }
        }
        return res;
    }
}
