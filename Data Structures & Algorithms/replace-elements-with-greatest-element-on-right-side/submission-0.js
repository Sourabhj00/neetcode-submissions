class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let localMax = arr.at(-1);
        arr[arr.length-1] = -1;
        if(arr.length == 1) return arr;
        for(let i=arr.length-2;i>=0;i--){
            if(arr[i]>localMax){
                [arr[i],localMax] = [localMax, arr[i]];
            } else {
                arr[i] = localMax;
            }
        }
        return arr;
    }
}
