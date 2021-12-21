'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    if (initialValue === undefined) {
      accumulator = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      const currentValue = this[i];

      accumulator = callback(accumulator, currentValue, i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
