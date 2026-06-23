class LinkedNode {
    constructor(val, next = null){
        this.next = next;
        this.val = val
    }
}


class LinkedList {
    constructor() {
        this.head = new LinkedNode(-1);
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let curr = this.head.next;
        let idx = 0;
        while(curr){
            if(idx === index) return curr.val;
            idx++;
            curr = curr.next;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newNode = new LinkedNode(val);
        newNode.next = this.head.next;
        this.head.next = newNode;
        if(!newNode.next){
            this.tail = newNode;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newTail = new LinkedNode(val);
        this.tail.next = newTail;
        this.tail = newTail;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let curr = this.head;
        let i=0;
        while(i<index && curr){
            curr = curr.next;
            i++;
        }
        if(curr && curr.next){
            if(curr.next == this.tail){
                this.tail = curr;
            }
            curr.next = curr.next.next;
            return true;
        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const res = [];
        let curr = this.head.next;
        while(curr){
            res.push(curr.val);
            curr = curr.next;
        }
        return res;
    }
}
