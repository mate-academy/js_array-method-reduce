'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let sum = initialValue;

    let startIndex = 0;

    if (initialValue === undefined) {
      sum = this[0];
      startIndex = 1;
    }

    for (let index = startIndex; index < this.length; index++) {
      sum = callback(sum, this[index], index, this);
    }

    return sum;
  };
}

module.exports = applyCustomReduce;
