'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let count = initialValue;
    let temp = 0;

    if (initialValue === undefined) {
      count = this[0];
      temp = 1;
    }

    for (let i = temp; i < this.length; i++) {
      count = callback(count, this[i], i, this);
    }

    return count;
  };
}

module.exports = applyCustomReduce;
