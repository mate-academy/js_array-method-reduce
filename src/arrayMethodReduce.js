'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator, start;

    if (initialValue === undefined) {
      accumulator = this[0];
      start = 1;
    } else {
      accumulator = initialValue;
      start = 0;
    }

    for (let i = start; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
