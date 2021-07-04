'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulatedValue = initialValue;
    let startIndex = 0;

    if (initialValue === undefined) {
      startIndex = 1;
      accumulatedValue = this[0];
    }

    for (let i = startIndex; i < this.length; i++) {
      accumulatedValue = callback(accumulatedValue, this[i], i, this);
    }

    return accumulatedValue;
  };
}

module.exports = applyCustomReduce;
