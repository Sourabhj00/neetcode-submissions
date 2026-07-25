class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        const arr = this.keyStore.get(key) ?? [];
        arr.push([value, timestamp]);
        this.keyStore.set(key,arr);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key)) return "";
        const arr = this.keyStore.get(key);
        let left = 0, right = arr.length -1;
        let result = "";
        while(left <= right){
            const mid = left + Math.floor((right - left)/2);
            if(arr[mid][1] > timestamp){
                right = mid -1;
            } else {
                result = arr[mid][0];
                left = mid + 1;
            }
        }
        return result;
    }
}
