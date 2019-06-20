'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let total = initialValue === undefined ? undefined : initialValue;

    for (let i = 0; i < this.length; i++) {
      total = total !== undefined
        ? callback(total, this[i], i, this) : this[i];
    }

    return total;
  };
}

module.exports = applyCustomReduce;
