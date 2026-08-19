class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let one = 1, two = 1;
        let i = 2;
        while(i <= n){
            const temp = one;
            one = two + one;
            two = temp;
            i++;
        }
        return one;
    }
}
