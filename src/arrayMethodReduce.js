'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let start = 0;
    let accumulator = initialValue;

    if (initialValue === undefined) {
      start = 1;
      accumulator = this[0];
    }

    for (let i = start; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
