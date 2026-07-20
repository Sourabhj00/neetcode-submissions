class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        position = position.map((a,i) => [a,speed[i]]);
        position.sort((a,b)=> b[0]-a[0]);
        const stack = [];
        for(let i=0; i< position.length; i++){
            stack.push((target - position[i][0])/position[i][1]);
            if(stack.length >1 && stack.at(-1) <= stack.at(-2)){
                stack.pop();
            }
        }
        return stack.length;
    }
}
