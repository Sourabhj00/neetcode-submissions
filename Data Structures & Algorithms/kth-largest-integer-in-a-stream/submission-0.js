class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.heap = [null];
        for(const num of nums){
            this.heapify(num);

        }
    }

    heapify(n){
        this.heap.push(n);
        let i = this.heap.length - 1;

        while(i> 1 && this.heap[i] < this.heap[Math.floor(i/2)]){
            [this.heap[i],this.heap[Math.floor(i/2)]] = [this.heap[Math.floor(i/2)], this.heap[i]];
            i = Math.floor(i/2);
        }

        if(this.heap.length > this.k + 1){
            this.poop();
        }
    }

    poop(){
        if(this.heap.length <= 1) return;
        if(this.heap.length === 2) {
            this.heap.pop();
            return;
        }
        this.heap[1] = this.heap.pop();
        let i = 1;
        while(2 *i<this.heap.length){
            if(this.heap[2 * i] > this.heap[2 * i + 1] && this.heap[i] > this.heap[2*i+1] && 2 * i + 1 < this.heap.length){
                [this.heap[i],this.heap[2*i+1]] = [this.heap[2*i+1], this.heap[i]];
                i = 2 * i +1;
            } else if (this.heap[2*i] < this.heap[i]){
                [this.heap[i],this.heap[2*i]] = [this.heap[2*i], this.heap[i]];
                i = 2*i;
            } else {
                break;
            }
        }

    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heapify(val);
        while(this.heap.length > this.k +1){
            this.poop();
        }
        return this.heap[1];
    }
}
