/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */

 // ...args collects all arguments passed to function into an array name arrs
 
var argumentsLength = function(...args) {
    return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */