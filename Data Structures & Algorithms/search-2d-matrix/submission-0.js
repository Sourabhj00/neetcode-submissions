class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(let i=0; i<matrix.length;i++){
            if(matrix[i][0] <= target && matrix[i][matrix[i].length -1] >= target){
                const row = matrix[i];
                let left =0, right = row.length -1;
                while(left <= right){
                    const mid = left + Math.floor((right-left)/2);
                    if(row[mid] === target){
                        return true;
                    } else if (row[mid] > target){
                        right = mid - 1;
                    } else {
                        left = mid + 1;
                    }
                }
            } else {
                continue;
            }
        }
        return false;
    }
}
