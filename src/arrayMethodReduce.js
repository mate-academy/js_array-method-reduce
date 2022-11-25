'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let index = 0;
    let startValue = initialValue;

    if (arguments.length < 2) {
      startValue = this[index];
      index = 1;
    }

    let accumulator = startValue;

    for (; index < this.length; index++) {
      accumulator = callback(accumulator, this[index], index, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
