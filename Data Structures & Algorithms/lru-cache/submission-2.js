class NodeList{
    constructor(val, key, prev = null,next = null){
        this.val = val;
        this.key = key;
        this.prev = prev;
        this.next = next;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.hashMap = new Map();
        this.left = new NodeList(null, null);
        this.right = new NodeList(null, null);
        this.left.next = this.right;
        this.right.prev = this.left;
    }


    remove(node){
        const next = node.next;
        const prev = node.prev;
        next.prev = prev;
        prev.next = next;
    }

    insert(node){
        const prev = this.right.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.right;
        this.right.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.hashMap.has(key)){
            const node = this.hashMap.get(key);
            this.remove(node);
            this.insert(node);
            return node.val;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.hashMap.has(key)){
            this.remove(this.hashMap.get(key));
        } else if(this.hashMap.size == this.capacity){
            this.hashMap.delete(this.left.next.key);
            this.remove(this.left.next);
        }
        const node = new NodeList(value,key);
        this.insert(node);
        this.hashMap.set(key,node);
    }
}
