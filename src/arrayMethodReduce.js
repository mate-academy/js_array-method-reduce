'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const countGivenArgs = arguments.length;
    let total = initialValue;
    let i = 0;

    if (countGivenArgs === 1) {
      total = this[0];
      i = 1;
    }

    for (i; i < this.length; i++) {
      total = callback(total, this[i], i, this);
    }

    return total;
  };
}

module.exports = applyCustomReduce;
