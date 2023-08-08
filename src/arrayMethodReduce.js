'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const START_ZERO_VALUE = 0;
    const START_ONE_VALUE = 1;
    const argumentsLength = arguments.length;
    const startIndex = argumentsLength <= 1
      ? START_ONE_VALUE : START_ZERO_VALUE;
    let accumulator = argumentsLength <= 1 ? this[0] : initialValue;

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
