'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    if (this.length === 0 && !initialValue) {
      throw new TypeError('Reduce of an empty array with no initial value');
    }

    let accumulator = initialValue;
    const startIndex = accumulator.length === 1 ? 1 : 0;

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
