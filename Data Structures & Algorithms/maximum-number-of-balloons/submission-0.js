class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text) {
        const hashMap = new Map();
        for(const c of text){
            if('balon'.includes(c)){
                hashMap.set(c, (hashMap.get(c)||0) + 1);
            }
        }

        if(hashMap.size < 5){
            return 0;
        }

        hashMap.set('l', Math.floor(hashMap.get('l')/2));
        hashMap.set('o', Math.floor(hashMap.get('o')/2));
        return Math.min(...Array.from(hashMap.values()));
    }
}
