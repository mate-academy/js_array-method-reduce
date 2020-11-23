'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let index, accumulator;

    if (initialValue === undefined) {
      index = 1;
      accumulator = this[0];
    } else {
      index = 0;
      accumulator = initialValue;
    }

    for (let i = index; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
