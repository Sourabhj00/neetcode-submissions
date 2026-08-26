class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.prefix = [];
        let total = 0;
        for(const n of nums){
            total += n;
            this.prefix.push(total);
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        const preRight = this.prefix[right];
        const preLeft = left > 0 ? this.prefix[left - 1] : 0;
        return preRight - preLeft;
    }
}
