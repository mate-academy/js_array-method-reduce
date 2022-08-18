'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = initialValue;
    let currentValue = 0;

    for (let i = currentValue; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    if (arguments.length === 1) {
      accumulator = this[0];
      currentValue = 1;

      for (let i = currentValue; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
      }

      return accumulator;
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
