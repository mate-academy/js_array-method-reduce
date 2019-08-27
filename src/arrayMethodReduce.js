'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = initialValue === undefined ? undefined : initialValue;

    for (let i = 0; i < this.length; i++) {
      if (accumulator !== undefined) {
        accumulator = callback(accumulator, this[i], i, this);
      } else {
        accumulator = this[i];
      }
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
