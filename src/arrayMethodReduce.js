'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = initialValue;
    let i = 0;

    if (arguments.length === 1) {
      i = 1;
      accumulator = this[0];
    }

    if (!this.length) {
      return initialValue;
    }

    if (this.length === 1) {
      return this[0];
    }

    for (i; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
