'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here

    let sum = initialValue;
    let startindex = 0;

    if (initialValue === undefined) {
      sum = this[0];
      startindex = 1;
    }

    for (let i = startindex; i < this.length; i++) {
      sum = callback(sum, this[i], i, this);
    }

    return sum;
  };
}

module.exports = applyCustomReduce;
