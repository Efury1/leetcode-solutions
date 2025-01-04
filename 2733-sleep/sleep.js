/**
 * @param {number} millis
 * @return {Promise}
 */

 /* 
 * Wrap setTimeout in a Promise, because i can pause the execution for desired time
 * 
 **/
async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */