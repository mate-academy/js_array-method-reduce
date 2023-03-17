'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = arguments.length < 2 ? this[0] : initialValue;

    const start = arguments.length < 2 ? initialValue : 1;

    for (let i = start ? 0 : 1; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
