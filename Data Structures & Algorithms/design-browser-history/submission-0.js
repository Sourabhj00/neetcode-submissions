class DoublyLinkedList {
    constructor(val, prev=null, next=null){
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}


class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.homepage = new DoublyLinkedList(homepage);
        this.front = this.homepage;
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        const urlNode= new DoublyLinkedList(url);
        if(this.front.next){
            this.front.next.prev = null;
        }
        this.front.next = urlNode;
        urlNode.prev = this.front;
        this.front = this.front.next;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        while(steps>0 && this.front && this.front.prev){
            this.front = this.front.prev;
            steps--;
        }
        return this.front.val;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        while(steps>0 && this.front && this.front.next){
            this.front = this.front.next;
            steps--;
        }
        return this.front.val;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
