'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (!this.length) {
      return initialValue;
    }

    let result = 0;
    let accumulator;
    if (initialValue === undefined) {
      accumulator = this[0];
      for (let i = 1; i < this.length; i++) {
        result = callback(accumulator, this[i], i);
        accumulator = result;
      }
    } else {
      accumulator = initialValue;
      for (let i = 0; i < this.length; i++) {
        result = callback(accumulator, this[i], i, this);
        accumulator = result;
      }
    }

    return result;
  };
}

module.exports = applyCustomReduce;
