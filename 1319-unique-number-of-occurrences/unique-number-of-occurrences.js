/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    // init an pojo
    // iterate through arr
        // if num is in pojo, increment val +1
        // else add num to pojo with val of 1
    // repeat
    // for val in pojo get count
        // if count > 1 return false
    // repeat
    // return true
    const obj = {}

    for(let i=0; i<arr.length; i++) {
        if (arr[i] in obj) {
            obj[arr[i]] += 1;
        } else {
            obj[arr[i]] = 1;
        }
    }

    // {1:3, 2:2, 3:1}
    const set1 = new Set();
    const set2 = new Set();

    for(let key in obj) {
        set1.add(obj[key])
        set2.add(key)
    }

    if(set1.size === set2.size) {
        return true
    } else {
        return false
    }
};