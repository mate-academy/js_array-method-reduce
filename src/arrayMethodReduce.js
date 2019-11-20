'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (!this.length) {
      return initialValue;
    }
    let result = 0;
    let accumulator;
    let i = 0;

    if (initialValue === undefined) {
      accumulator = this[0];
      i = 1;
    } else {
      accumulator = initialValue;
    }

    for (i; i < this.length; i++) {
      result = callback(accumulator, this[i], i, this);
      accumulator = result;
    }

    return result;
  };
}

module.exports = applyCustomReduce;
