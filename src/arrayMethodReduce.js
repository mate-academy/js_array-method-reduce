'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let sum = initialValue;

    if (sum !== undefined) {
      for (let i = 0; i < this.length; i++) {
        sum = callback(sum, this[i], i, this);
      }
    } else {
      sum = this[0];

      for (let i = 1; i < this.length; i++) {
        sum = callback(sum, this[i], i, this);
      }
    }

    return sum;
  };
}

module.exports = applyCustomReduce;
