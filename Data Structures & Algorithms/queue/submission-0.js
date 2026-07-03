class NodeList{
    constructor(val,prev = null, next = null){
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class MyDeque {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = this.head;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.size === 0;
    }

    /**
     * @param {number} value
     */
    append(value) {
        if(!this.size){
            this.head = new NodeList(value);
            this.tail = this.head;
            this.size++;
            return;
        }
        const temp = new NodeList(value, this.tail);
        this.tail.next = temp;
        this.tail = this.tail.next;
        this.size++;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        if(!this.size){
            this.head = new NodeList(value);
            this.tail = this.head;
            this.size++;
            return;
        }
        const temp = new NodeList(value, null, this.head);
        this.head.prev = temp;
        this.head = this.head.prev;
        this.size++;
    }

    /**
     * @return {void}
     */
    pop() {
        if(!this.size){
            return -1;
        }
        const ans = this.tail.val;
        const temp = this.tail.prev;
        this.tail.prev= null;
        this.tail = temp;
        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }
        this.size--;
        return ans;
    }

    /**
     * @return {number}
     */
    popleft() {
        if(!this.size){
            return -1;
        }
        const ans = this.head.val;
        const temp = this.head.next;
        this.head.next = null;
        this.head = temp;
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }
        this.size--;
        return ans;
    }
}
