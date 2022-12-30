'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator, startingIndex;

    if (arguments.length === 1) {
      accumulator = this[0];
      startingIndex = 1;
    } else {
      accumulator = initialValue;
      startingIndex = 0;
    }

    for (let i = startingIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
