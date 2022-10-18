'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (this === null) {
      throw new Error('Cant iterate over underfined or null');
    }

    let result;
    let i = 0;

    const obj = Object(this);
    const len = obj.length;

    if (typeof callback !== 'function') {
      throw new Error('callback is not a function');
    }

    if (arguments.length >= 2) {
      result = initialValue;
    } else {
      if (len === 0) {
        throw new Error('reduce of empty array with no initial value');
      }
      result = obj[i];
      i++;
    }

    for (; i < obj.length; i++) {
      if (i in obj) {
        result = callback(result, obj[i], i, obj);
      }
    }

    return result;
  };
}

module.exports = applyCustomReduce;
