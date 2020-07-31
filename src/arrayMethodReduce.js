'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator;
    let currentValue;

    if (this.length === 0) {
      return initialValue;
    }

    for (let index = 0; index < this.length; index++) {
      currentValue = this[index];

      if (initialValue === undefined && index < 1) {
        accumulator = this[0];
        currentValue = this[1];
        index++;
      }

      if (initialValue !== undefined && index < 1) {
        accumulator = initialValue;
      }

      accumulator = callback(accumulator, currentValue, index, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
