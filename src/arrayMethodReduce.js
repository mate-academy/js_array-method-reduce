'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startValue = 0;
    let accumulatorValue = initialValue;

    if (initialValue === undefined) {
      startValue = 1;
      accumulatorValue = this[0];
    }

    for (let i = startValue; i < this.length; i++) {
      accumulatorValue = callback(accumulatorValue, this[i], i, this);
    }

    return accumulatorValue;
  };
}

module.exports = applyCustomReduce;
