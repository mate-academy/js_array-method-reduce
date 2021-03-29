'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = this[0];

    if (initialValue === undefined) {
      for (let i = 1; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
      }
    } else {
      accumulator = initialValue;

      for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
      }
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
