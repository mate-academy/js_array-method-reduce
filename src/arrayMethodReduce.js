'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let sum;
    let startIndex;

    if (initialValue === undefined) {
      sum = this[0];
      startIndex = 1;
    } else {
      sum = initialValue;
      startIndex = 0;
    }

    for (let i = startIndex; i < this.length; i++) {
      sum = callback(sum, this[i], i, this);
    }

    return sum;
  };
}

module.exports = applyCustomReduce;
