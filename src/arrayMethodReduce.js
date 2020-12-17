'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startIndex = 0;
    let sum = initialValue;

    if (initialValue === undefined) {
      startIndex = 1;
      sum = this[0];
    }

    for (let i = startIndex; i < this.length; i++) {
      sum = (callback(sum, this[i], i, this));
    }

    return sum;
  };
}

module.exports = applyCustomReduce;
