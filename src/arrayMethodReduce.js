'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = 0) {
    let i = 1;
    let accumulator = initialValue;

    arguments.length === 1
      ? accumulator = this[initialValue]
      : i = 0;

    for (i; i < this.length; i += 1) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
