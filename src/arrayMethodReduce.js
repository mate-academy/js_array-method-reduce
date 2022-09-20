'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let sum = initialValue;
    let index = 0;

    if (arguments.length <= 1) {
      index = 1;
      sum = this[0];
    }

    for (; index < this.length; index++) {
      sum = callback(sum, this[index], index, this);
    }

    return sum;
  };
}

module.exports = applyCustomReduce;
