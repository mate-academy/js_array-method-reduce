'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = initialValue;
    let i = 0;

    if (this.length === 0) {
      return initialValue;
    }

    if (initialValue === undefined) {
      accumulator = this[0];
      i = 1;
    }

    for (; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
