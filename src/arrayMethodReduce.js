'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let start = initialValue;
    let i = 0;

    if (start === undefined) {
      start = this[0];
      i = 1;
    }

    let result = start;

    for (i; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
