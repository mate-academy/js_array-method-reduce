'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let sum = initialValue;

    for (let i = 0; i < this.length; i++) {
      if (sum !== undefined) {
        sum = callback(sum, this[i], i, this);
      } else {
        sum = this[i];
      }
    }

    return sum;
  };
}

module.exports = applyCustomReduce;
