'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let totalValue = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      totalValue = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      totalValue = callback(totalValue, this[i], i, this);
    }

    return totalValue;
  };
}

module.exports = applyCustomReduce;
