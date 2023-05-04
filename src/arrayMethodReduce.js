'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let currentIndex = 0;
    let accumulator = initialValue;

    if (arguments.length < 2) {
      currentIndex = 1;
      accumulator = this[0];
    }

    for (let i = currentIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
