/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe(expected) {
            // Strict equality for comparison 
            if (val === expected) {
                return true;
            } else {
                throw new Error("Not Equal")
            }
        },
        notToBe(expected) {
            // Strict inequality
            if(val !== expected) {
                return true
            } else {
                throw new Error ("Equal");
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */