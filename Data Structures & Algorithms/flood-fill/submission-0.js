class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        const ROW = image.length, COL = image[0].length;
        if(color === image[sr][sc]){
            return image;
        }
        const diffColor = image[sr][sc];
        const dfs = (r,c) => {
            if(Math.min(r,c)<0 || r === ROW || c === COL || image[r][c] == color || image[r][c] !== diffColor){
                return;
            }
            if(image[r][c] !== color && image[r][c] == diffColor){
                image[r][c] = color
            }
            dfs(r-1,c);
            dfs(r+1,c);
            dfs(r,c-1);
            dfs(r,c+1);
        }
        dfs(sr,sc);
        return image;
    }
}
