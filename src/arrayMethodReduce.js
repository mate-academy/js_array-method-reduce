'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = initialValue;
    let start = 0;

    if (initialValue === undefined) {
      result = this[0];
      start = 1;
    }

    for (start; start < this.length; start++) {
      result = callback(result, this[start], start, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
