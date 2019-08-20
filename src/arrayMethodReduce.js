'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = initialValue !== undefined
      ? initialValue
      : typeof this[0] === 'number'
        ? this[0]
        : '';
    for (let i = 0; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }
    return result;
  };
}

module.exports = applyCustomReduce;
