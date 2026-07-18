class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const row = matrix.length, col = matrix[0].length;
        let left =0, right = row * col -1;
        while(left <= right){
            const mid = left + Math.floor((right - left)/2);
            const r = Math.floor(mid/col);
            const c = mid % col;
            if(matrix[r][c] == target){
                return true
            } else if (matrix[r][c] > target){
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return false;
    }
}
