'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let total;
    let startIndex;

    if (arguments.length >= 2) {
      total = initialValue;
      startIndex = 0;
    } else {
      total = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      total = callback(total, this[i], i, this);
    }

    return total;
  };
};

module.exports = applyCustomReduce;
