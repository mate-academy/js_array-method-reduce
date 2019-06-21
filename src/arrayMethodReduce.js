'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (this.length < 1) {
      return initialValue;
    }

    let accumulator = 0;
    let previousValue = this[0];

    if (initialValue !== undefined) {
      previousValue = initialValue;
      for (let i = 0; i < this.length; i++) {
        const item = this[i];
        const index = i;
        const arr = this;
        accumulator = callback(previousValue, item, index, arr);
        previousValue = accumulator;
      }

      return accumulator;
    }

    for (let i = 1; i < this.length; i++) {
      const item = this[i];
      const index = i;
      const arr = this;
      accumulator = callback(previousValue, item, index, arr);
      previousValue = accumulator;
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
