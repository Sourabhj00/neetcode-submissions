class MinStack {
    constructor() {
        this.stack = new Array();
        this.minSt = new Array(1).fill(Number.MAX_SAFE_INTEGER);
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if(val<this.minSt.at(-1)){
            this.minSt.push(val);
        } else {
            this.minSt.push(this.minSt.at(-1));
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minSt.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minSt.at(-1);
    }
}
