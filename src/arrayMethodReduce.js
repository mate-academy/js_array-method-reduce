'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (this == null) {
      throw new Error('Can\'t iterate over undefined or null');
    }

    let result;
    let i = 0;

    const obj = Object(this);
    const len = obj.length;

    if (typeof callback !== 'function') {
      throw new Error('Callback is not a function');
    }

    if (arguments.length >= 2) {
      result = initialValue;
    } else {
      if (len === 0) {
        throw new Error('Reduce of empty array with no initial value');
      }
      result = obj[i];
      i++;
    }

    for (; i < this.length; i++) {
      if (i in obj) {
        result = callback(result, obj[i], i, obj);
      }
    }

    return result;
  };
}

module.exports = applyCustomReduce;
