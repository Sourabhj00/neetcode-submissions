class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let res = 0;
        for(const detail of details){
            const first = detail[11];
            const second = detail[12];
            if((Number(first) * 10 + Number(second)) > 60){
                res++;
            }
        }
        return res;
    }
}
