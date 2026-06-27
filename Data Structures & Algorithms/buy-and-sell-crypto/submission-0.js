class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0, right = 1, profit = 0;
        if(prices.length == 1) return 0;
        while(right < prices.length){
            if(prices[right]<prices[left]){
                left = right;
            }
            profit = Math.max(profit, prices[right] - prices[left])
            right++;
        }
        return profit;
    }
}
