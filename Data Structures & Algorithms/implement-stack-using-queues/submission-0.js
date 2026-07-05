class MyStack {
    constructor() {
        this.main = new Queue();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.main.push(x);

        for(let i= this.main.size() -1; i >0; i--){
            this.main.push(this.main.pop());
        }
    }

    /**
     * @return {number}
     */
    pop() {
        return this.main.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.main.front();
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.main.isEmpty();
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
