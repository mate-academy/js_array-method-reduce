'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = this[0];
    let count = 1;

    if (arguments[1] !== undefined) {
      accumulator = initialValue;
      count = 0;
    }

    for (count; count < this.length; count++) {
      accumulator = callback(accumulator, this[count], count, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
