'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const hasInitialValue = arguments.length > 1;
    const startIndex = hasInitialValue ? 0 : 1;
    let sum = hasInitialValue ? initialValue : this[0];

    for (let i = startIndex; i < this.length; i++) {
      sum = callback(sum, this[i], i, this);
    }

    return sum;
  };
}

module.exports = applyCustomReduce;
