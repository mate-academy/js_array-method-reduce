'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (this.length === 0 && initialValue === undefined) {
      throw new TypeError('array is empty');
    }

    if (this.length === 1 && initialValue === undefined) {
      return this.filter(item => item !== undefined);
    }

    if (this.length === 0 && initialValue !== undefined) {
      return initialValue;
    }

    let accumulator;
    let startValue;

    if (initialValue === undefined) {
      accumulator = this[0];
      startValue = 1;
    } else {
      accumulator = initialValue;
      startValue = 0;
    }

    for (let i = startValue; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
