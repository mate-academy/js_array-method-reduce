'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let total = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      total = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      total = callback(total, this[i], i, this);
    }

    return total;
  };
}

module.exports = applyCustomReduce;
