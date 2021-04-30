'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator;
    let currentValue;

    if (initialValue !== undefined) {
      accumulator = initialValue;
      currentValue = 0;
    } else {
      accumulator = this[0];
      currentValue = 1;
    }

    for (let i = currentValue; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
