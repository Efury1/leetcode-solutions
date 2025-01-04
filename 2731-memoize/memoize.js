/**
 * @param {Function} fn
 * @return {Function}
 */


 /** 
 * Explanation
 * The cache is part of the closure of the returned inner function, therefore it persists in memory as long as function is in use
  */
function memoize(fn) {
    const cache = {}; // Use a plain object as the cache

    return function (...args) {
        const key = JSON.stringify(args); // Convert arguments to a unique key
        if (key in cache) {
            return cache[key]; // Return cached result if it exists
        }

        const result = fn(...args); // Compute the result
        cache[key] = result; // Cache the computed result
        return result; // Return the result
    };
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */