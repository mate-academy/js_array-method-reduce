'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator;

    if (initialValue || initialValue === 0) {
      accumulator = initialValue;
    }

    for (let i = 0; i < this.length; i++) {
      if (!accumulator && accumulator !== 0) {
        accumulator = this[0];
        continue;
      }

      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
