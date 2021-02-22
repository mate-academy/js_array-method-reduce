'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    if (arguments.length === 1) {
      accumulator = this[0];
      startIndex = 1;
    }

    while (startIndex < this.length) {
      accumulator = callback(accumulator, this[startIndex], startIndex, this);
      startIndex++;
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
