'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let count;
    let temp;

    if (initialValue === undefined) {
      count = this[0];
      temp = 1;
    } else {
      count = initialValue;
      temp = 0;
    }

    for (let i = temp; i < this.length; i++) {
      count = callback(count, this[i], i, this);
    }

    return count;
  };
}

module.exports = applyCustomReduce;
