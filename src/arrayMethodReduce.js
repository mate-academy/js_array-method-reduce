'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here

    let sum = arguments.length > 1 ? initialValue : this[0];
    const index = arguments.length > 1 ? 0 : 1;

    for (let i = index; i < this.length; i++) {
      sum = callback(sum, this[i], i, this);
    }

    return sum;
  };
}

module.exports = applyCustomReduce;
