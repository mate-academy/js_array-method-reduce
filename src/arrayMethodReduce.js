'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (this.length === 0 && !initialValue) {
      throw new Error('Reduce2 of empty array with no initial value');
    }

    let accumulator = initialValue;
    let currentIndex = 0;

    if (arguments.length < 2) {
      accumulator = this[0];
      currentIndex++;
    }

    for (let i = currentIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
