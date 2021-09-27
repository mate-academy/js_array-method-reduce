'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulatedValue = initialValue;
    let i = 0;

    if (accumulatedValue === undefined) {
      accumulatedValue = this[i];
      i = 1;
    }

    for (; i < this.length; i++) {
      accumulatedValue = callback(accumulatedValue, this[i], i, this);
    }

    return accumulatedValue;
  };
}

module.exports = applyCustomReduce;
