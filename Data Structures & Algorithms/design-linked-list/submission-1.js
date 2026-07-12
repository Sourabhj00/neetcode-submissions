class ListNode{
    constructor(val, next = null, prev = null){
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class MyLinkedList {
    constructor() {
        this.size = 0;
        this.head = new ListNode(null);
        this.tail = new ListNode(null);
        this.tail.prev = this.head;
        this.head.next = this.tail;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        let curr;
        if(index <= this.size/2){
            curr = this.head;
            for(let i=0;i<index;i++){
                curr = curr.next;
            }
        } else {
            curr = this.tail;
            for(let i=0; i<this.size - index + 1; i++){
                curr = curr.prev;
            }
        }
        return curr;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if(index < 0 || index >= this.size) return -1;
        return this.getPrev(index).next.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        this.addAtIndex(0,val);
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        this.addAtIndex(this.size,val);
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if(index > this.size){
            return;
        }
        if(index < 0) index = 0;
        const node = new ListNode(val);
        const prev = this.getPrev(index);
        const next = prev.next;
        prev.next = node;
        node.prev = prev;
        next.prev = node;
        node.next = next;
        this.size++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if(index < 0 || index >= this.size) return;
        const prev = this.getPrev(index);
        const next = prev.next.next;
        prev.next = next;
        next.prev = prev;
        this.size--;
    }
}
