'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = arguments.length > 1 ? initialValue : this[0];
    const startIndex = arguments.length > 1 ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
      const currentValue = this[i];
      const currentIndex = i;

      accumulator = callback(accumulator, currentValue, currentIndex, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
