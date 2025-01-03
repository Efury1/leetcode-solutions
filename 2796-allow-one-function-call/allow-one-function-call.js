/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let hasBeenCalled = false;
    return function(...args){
        if(hasBeenCalled) {
            return undefined; // IF called return undefined 
        }
        hasBeenCalled = true;
        return fn(...args); // Call original function
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
