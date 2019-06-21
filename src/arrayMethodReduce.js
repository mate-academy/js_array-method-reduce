'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    // write code here
    let total = initialValue;
    const startIndex = arguments.length < 2 ? 1 : 0;
    for (let i = startIndex; i < this.length; i++) {
      total = callback(total, this[i], i, this);
    }
    return total;
  };
}

module.exports = applyCustomReduce;
