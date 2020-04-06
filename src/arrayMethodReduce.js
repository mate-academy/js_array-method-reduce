'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let count = this[0];

    if (initialValue !== undefined) {
      count = callback(initialValue, this[0], 0, this);
    }

    for (let i = 1; i < this.length; i++) {
      count = callback(count, this[i], i, this);
    }

    return count;
  };
}

module.exports = applyCustomReduce;
