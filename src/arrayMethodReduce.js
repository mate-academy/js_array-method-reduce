'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      accumulator = this[0];
      startIndex = 1;
    }

    for (
      let currentIndex = startIndex;
      currentIndex < this.length;
      currentIndex++
    ) {
      accumulator = callback(
        accumulator,
        this[currentIndex],
        currentIndex,
        this
      );
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
