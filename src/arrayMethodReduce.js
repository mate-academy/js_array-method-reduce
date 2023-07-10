'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = arguments.length > 1 ? initialValue : this[0];
    const len = this.length;
    const startValue = arguments.length > 1 ? 0 : 1;

    for (let i = startValue; i < len; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
