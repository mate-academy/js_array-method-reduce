'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let sum = initialValue;
    let startIndex = 0;

    // If initialvalue is NOT Provided
    if (arguments.length === 1) {
      sum = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      sum = callback(sum, this[i], i, this);
    }

    return sum;
  };
}

module.exports = applyCustomReduce;
