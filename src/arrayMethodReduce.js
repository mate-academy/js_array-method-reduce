'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (this.length === 0 && initialValue === undefined) {
      throw new TypeError('Reduce of empty array with no initial value');
    }

    let accumulator;
    let currentIndex;

    if (arguments.length === 2) {
      accumulator = initialValue;
      currentIndex = 0;
    } else {
      accumulator = this[0];
      currentIndex = 1;
    }

    for (; currentIndex < this.length; currentIndex++) {
      accumulator = callback(
        accumulator,
        this[currentIndex],
        currentIndex,
        this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
