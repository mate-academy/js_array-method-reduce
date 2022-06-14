'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let sum = initialValue;
    let count = 0;

    if (arguments.length < 2) {
      sum = this[0];
      count++;
    }

    while (count < this.length) {
      sum = callback(sum, this[count], count, this);
      count++;
    }

    return sum;
  };
}

module.exports = applyCustomReduce;
