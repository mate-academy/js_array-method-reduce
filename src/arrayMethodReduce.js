'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let sum = (initialValue === undefined) ? this[0] : initialValue;
    const firstIndex = (sum === initialValue) ? 0 : 1;

    for (let i = firstIndex; i < this.length; i++) {
      sum = callback(sum, this[i], i, this);
    }

    return sum;
  };
}

module.exports = applyCustomReduce;
