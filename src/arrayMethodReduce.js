'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (this.length === 0) {
      return initialValue;
    }

    let startIndex = 0;
    let total = initialValue;

    if (initialValue === undefined) {
      startIndex = 1;
      total = this[0];
    }

    for (let i = startIndex; i < this.length; i++) {
      total = callback(total, this[i], i, this);
    }

    return total;
  };
}

module.exports = applyCustomReduce;
