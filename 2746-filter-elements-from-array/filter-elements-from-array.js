/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    //Using filter when you only want some elemnts in it
    const filteredArray = arr.filter(fn);
    return filteredArray;
};