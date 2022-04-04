'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const start = arguments.length < 2
      ? 1
      : 0;
    let finalValue = arguments.length < 2
      ? this[0]
      : initialValue;

    for (let i = start; i < this.length; i++) {
      finalValue = callback(finalValue, this[i], i, this);
    }

    return finalValue;
  };
}

module.exports = applyCustomReduce;
