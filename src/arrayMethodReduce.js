'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = initialValue;
    let i = 0;

    if (accumulator === undefined) {
      accumulator = this[0];
      i = 1;
    }

    while (i < this.length) {
      accumulator = callback(accumulator, this[i], i, this);
      i++;
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
