class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0);
        for(let i=temperatures.length - 2;i>=0;i--){
            let j = i+1;
            while(j<temperatures.length){
                if(temperatures[j]>temperatures[i]){
                    res[i] = j - i;
                    break;
                }
                if(res[j] == 0){
                    break;
                }
                j = j + res[j];
            }
        }
        return res;
    }
}
