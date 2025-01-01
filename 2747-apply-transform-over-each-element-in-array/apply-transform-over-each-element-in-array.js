/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// map() creates a new array from calling a fucntion for every array element

var map = function(arr, fn) {
    const returnedArray = arr.map(fn);
    return returnedArray;
};