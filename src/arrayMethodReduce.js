'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = arguments.length >= 2 ? initialValue : this[0];
    const startIndex = arguments.length >= 2 ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}
module.exports = applyCustomReduce;
