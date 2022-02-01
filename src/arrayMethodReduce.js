'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let sum = initialValue;
    let index = 0;

    if (arguments.length === 1) {
      index = 1;
      sum = this[0];
    }

    for (let i = index; i < this.length; i++) {
      sum = callback(sum, this[i], i, this);
    }

    return sum;
  };
}


module.exports = applyCustomReduce;
