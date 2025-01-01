/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    // n = 1, Adds 1 to the ucrrent value of n and does not modify n itself
    // n++, the post-increment operator increases the value of n by 1
    return function() {
        return counter = n++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */