'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const ZERO = 0;
    const ONE = 1;
    let accumulator = arguments.length <= ONE
      ? this[ZERO]
      : initialValue;
    const startIndex = arguments.length <= ONE
      ? ONE
      : ZERO;

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
