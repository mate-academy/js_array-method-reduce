'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let startIndex = 0;
    let accumulator = initialValue;

    if (initialValue === undefined) {
      accumulator = this[0];
      startIndex = 1;
    }

    let currentValue;

    for (let i = startIndex; i < this.length; i++) {
      currentValue = this[i];
      accumulator = callback(accumulator, currentValue, i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
