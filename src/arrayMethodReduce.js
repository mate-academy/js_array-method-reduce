'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let previousSum = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      previousSum = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      previousSum = callback(previousSum, this[i], i, this);
    }

    return previousSum;
  };
}

module.exports = applyCustomReduce;
