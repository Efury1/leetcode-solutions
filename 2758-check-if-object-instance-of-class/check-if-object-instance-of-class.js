/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
    if (obj == null || typeof classFunction !== 'function') {
        return false;
    }

    const targetProto = classFunction.prototype;
    let currentProto = Object.getPrototypeOf(obj);

    while (currentProto) {
        if (currentProto === targetProto) {
            return true; 
        }
        currentProto = Object.getPrototypeOf(currentProto);
    }
    return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */