'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let index = 0;
    let sum = initialValue;

    if (initialValue === undefined) {
      sum = this[0];
      index = 1;
    }

    for (let i = index; i < this.length; i++) {
      sum = callback(sum, this[i], i, this);
    }

    return sum;
  };
}

module.exports = applyCustomReduce;
