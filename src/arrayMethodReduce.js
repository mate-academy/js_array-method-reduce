'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result;
    let accumulator;
    let i;

    if (this.length === 0) {
      return initialValue;
    }

    if (initialValue !== undefined) {
      accumulator = initialValue;
      i = 0;
    } else {
      accumulator = this[0];
      i = 1;
    }

    for (; i < this.length; i++) {
      result = callback(accumulator, this[i], i, this);
      accumulator = result;
    }

    return result;
  };
}

module.exports = applyCustomReduce;
