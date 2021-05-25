'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator, startIndex;

    if (initialValue === undefined) {
      accumulator = this[0];
      startIndex = 1;
    } else {
      accumulator = initialValue;
      startIndex = 0;
    }

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}
module.exports = applyCustomReduce;
