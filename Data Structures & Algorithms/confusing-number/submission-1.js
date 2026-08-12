class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    confusingNumber(n) {
        const refObj = {
            '1' : 1,
            '0' : 0,
            '6' : 9,
            '8': 8,
            '9': 6
        }
        const temp = n;
        let res = 0;
        while(n){
            const lastDigit = n % 10;
            const rotatedDigit = refObj[String(lastDigit)];
            if(rotatedDigit == undefined){
                return false;
            }
            res = res * 10 + rotatedDigit;
            n  = Math.floor(n/10);
        }
        return temp != res;
    }
}
