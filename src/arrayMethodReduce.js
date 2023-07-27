'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startValue = 0;
    let accumulator = initialValue;

    if (arguments.length < 2) {
      accumulator = this[0];
      startValue = 1;
    }

    for (let i = startValue; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
