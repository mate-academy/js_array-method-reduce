'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = initialValue;
    let currIndex = 0;

    if (arguments.length < 2) {
      accumulator = this[0];
      currIndex = 1;
    }

    for (currIndex; currIndex < this.length; currIndex++) {
      accumulator = callback(accumulator, this[currIndex], currIndex, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
