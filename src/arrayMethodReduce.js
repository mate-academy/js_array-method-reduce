'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = 0;
    let currentValueIndex = 0;
    if (!initialValue && initialValue !== 0) {
      if (this.length === 0) {
        throw new TypeError('Empty array and no initial value');
      } else if (this.length === 1) {
        return this[0];
      } else {
        accumulator = this[0];
        currentValueIndex = 1;
      }
    } else if (this.length === 0) {
      return initialValue;
    } else {
      accumulator = initialValue;
    }

    for (let i = currentValueIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
