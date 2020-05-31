'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator;
    let index;

    if (initialValue === undefined) {
      accumulator = this[0];
      index = 1;
    } else {
      accumulator = initialValue;
      index = 0;
    }

    for (let i = index; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
