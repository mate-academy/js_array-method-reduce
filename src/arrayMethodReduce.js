'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let sum;
    let index;

    if (initialValue === undefined) {
      sum = this[0];
      index = 1;
    } else {
      sum = initialValue;
      index = 0;
    }

    for (let i = index; i < this.length; i++) {
      sum = callback(sum, this[i], i, this);
    }

    return sum;
  };
}

module.exports = applyCustomReduce;
