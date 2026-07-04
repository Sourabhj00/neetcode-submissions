class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let count = sandwiches.length;
        const arr = new Array(2).fill(0);
        for(const student of students){
            arr[student]++;
        }
        for(const sandwich of sandwiches){
            if(arr[sandwich] > 0){
                arr[sandwich]--;
                count--;
            }
            else {
                break;
            }
        }
        return count;
    }
}
