'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc = initialValue;
    let start = 0;

    if (initialValue === undefined) {
      acc = this[0];
      start = 1;
    }

    for (start; start < this.length; start++) {
      acc = (callback(acc, this[start], start, this));
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
