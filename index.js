/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    
    function counter(arr){
        // return arr.reduce((acc,item)=> {
        //     acc[item] = (acc[item] || 0) + 1;
        //     return acc;
        //     },{}); 
        const count = {};

        for(let item of arr){
            count[item] = (count[item] || 0) + 1
        }
        return count;
    }

    const occurrences_count = counter(arr);
    const occurrences = new Set(Object.values(occurrences_count));
    return Object.keys(occurrences_count).length == occurrences.size;
};
