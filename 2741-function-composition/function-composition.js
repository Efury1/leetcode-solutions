/**
 * @param {Function[]} functions
 * @return {Function}
 */

// The reduceRight method composes functions from right to left.
// The input `x` is passed through the composed functions sequentially.
// Each function's output becomes the input for the next function in the array.
// If the array is empty, the function simply returns the input `x`.

var compose = function(functions) {
    return function(x) {
         // Return a function that applies the composition
        const result = functions.reduceRight((accumulator, fn) => fn(accumulator), x);
        return result;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */