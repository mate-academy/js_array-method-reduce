'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (this.length === 0 && !initialValue) {
      throw new TypeError('Reduce of an empty array with no initial value');
    }

    let accumulator = this[0];
    let startIndex = 1;

    if (initialValue || initialValue === 0) {
      accumulator = initialValue;
      startIndex = 0;
    }

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
