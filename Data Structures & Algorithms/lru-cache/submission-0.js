class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.hashMap = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.hashMap.has(key)){
            const val = this.hashMap.get(key);
            this.hashMap.delete(key);
            this.hashMap.set(key,val);
            return val;
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
            this.hashMap.delete(key);
        } else if (this.capacity === this.hashMap.size){
            const first = this.hashMap.keys().next().value;
            this.hashMap.delete(first);
        }
        this.hashMap.set(key,value);
    }
}
