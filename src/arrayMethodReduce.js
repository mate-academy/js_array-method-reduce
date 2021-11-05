'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let y = 0;
    let sum = initialValue;

    if (initialValue === undefined) {
      y = 1;
      sum = this[0];
    }

    for (let i = y; i < this.length; i++) {
      sum = callback(sum, this[i], i, this);
    }

    return sum;
  };
}

module.exports = applyCustomReduce;
