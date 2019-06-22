'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let accumulator;

    if (this.length <= 0) {
      return initialValue;
    }

    initialValue !== undefined
      ? accumulator = callback(initialValue, this[0], 0, this)
      : accumulator = this[0];

    for (let i = 1; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
