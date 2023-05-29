'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let sum = initialValue;
    let startValue = 0;

    if (arguments.length === 1) {
      startValue = 1;
      sum = this[0];
    }

    for (let i = startValue; i < this.length; i++) {
      sum = callback(sum, this[i], i, this);
    }

    return sum;
  };
}

module.exports = applyCustomReduce;
