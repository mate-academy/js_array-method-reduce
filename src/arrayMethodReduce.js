'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (this.length === 0) {
      return initialValue;
    }

    let index = 1;
    let accumulator = this[0];

    if (arguments.length > 1) {
      index = 0;
      accumulator = initialValue;
    }

    for (let i = index; i < this.length; i++) {
      const result = callback(accumulator, this[i], i, this);

      accumulator = result;
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
