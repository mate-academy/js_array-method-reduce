'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let sum = initialValue;
    let i = 0;

    if (initialValue === undefined) {
      sum = this[0];
      i = 1;
    }

    for (i; i < this.length; i++) {
      sum = callback(sum, this[i], i, this);
    }

    return sum;
  };
};

module.exports = applyCustomReduce;
