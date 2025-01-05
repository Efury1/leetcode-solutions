/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

 // createTimeout schedules fn to run after t milliseconds
 // A cancelFn is created to cancel this scheduled execution
 // Using another setTimeout, cancelFn is invoked after cancelTimeMS

var cancellable = function(fn, args, t) {
    // Create a timeout for fn
    const timeoutId = setTimeout(() => fn(...args), t);
    // Define the cancel function
    const cancelFn = () => clearTimeout(timeoutId);
    // Return function
    return cancelFn;
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */