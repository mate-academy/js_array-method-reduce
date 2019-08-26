'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = 0) {
    let i = 0;
    let accumulator = initialValue;

    if (arguments.length === 1) {
      accumulator = this[0];
      i = 1;
    }

    for (i; i < this.length; i += 1) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
