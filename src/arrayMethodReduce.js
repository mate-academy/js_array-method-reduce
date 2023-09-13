'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator;
    let currentValue;

    if (initialValue >= 0) {
      accumulator = initialValue;
      currentValue = 0;
    } else {
      accumulator = this[0];
      currentValue = 1;
    }

    if (arguments.length === 2 && initialValue === undefined) {
      accumulator = undefined;
      currentValue = 0;
    }

    for (let i = currentValue; i < this.length; i++) {
      const callbackResult = callback(accumulator, this[i], i, this);

      accumulator = callbackResult;
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
