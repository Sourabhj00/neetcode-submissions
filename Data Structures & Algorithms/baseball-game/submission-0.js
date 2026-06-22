class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const res = [];
        for(let i=0; i<operations.length;i++){
            if(!isNaN(operations[i])){
                res.push(Number(operations[i]))
            } else if(operations[i] === 'C'){
                res.pop();
            } else if(operations[i] === 'D'){
                res.push(res.at(-1)*2);
            } else {
                res.push(res.at(-1) + res.at(-2));
            }
        }
        return res.reduce((acc,x) => acc + x,0);
    }
}
