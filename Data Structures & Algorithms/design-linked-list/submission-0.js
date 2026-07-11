class ListNode{
    constructor(val, next = null, prev = null){
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class MyLinkedList {
    constructor() {
        this.head = new ListNode(0);
        this.tail = new ListNode(0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        let curr;
        if(index < this.size/2){
            curr = this.head;
            for(let i=0; i<index;i++){
                curr = curr.next;
            }
        } else {
            curr = this.tail;
            for(let i=0; i<this.size - index + 1;i++){
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
        if(index >= this.size){
            return -1;
        }
        return this.getPrev(index).next.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        this.addAtIndex(0, val);
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        this.addAtIndex(this.size, val);
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index > this.size) {
            return;
        }
        const node = new ListNode(val);
        const prev = this.getPrev(index);
        const next = prev.next;
        prev.next = node;
        node.prev = prev;
        node.next = next;
        next.prev = node;
        this.size++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index >= this.size) {
            return;
        }
        const prev = this.getPrev(index);
        const cur = prev.next;
        const next = cur.next;
        prev.next = next;
        next.prev = prev;
        this.size--;
    }
}
