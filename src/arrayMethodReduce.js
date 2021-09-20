'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (!this.length && !initialValue) {
      throw new TypeError('Reduce of empty array with no initial value');
    }

    const startPosition = initialValue !== undefined ? 0 : 1;
    let accumulator = initialValue !== undefined ? initialValue : this[0];

    for (let i = startPosition; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
