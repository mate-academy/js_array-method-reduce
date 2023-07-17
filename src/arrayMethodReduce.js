'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator;
    let index;

    if (arguments.length > 1) {
      accumulator = initialValue;
      index = 0;
    } else {
      accumulator = this[0];
      index = 1;
    }

    while (index < this.length) {
      accumulator = callback(accumulator, this[index], index, this);
      index++;
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
