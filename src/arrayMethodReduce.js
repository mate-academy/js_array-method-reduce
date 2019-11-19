'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let i = 0;
    let result = initialValue;

    if (initialValue === undefined) {
      i = 1;
      result = this[0];
    }

    for (i; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }
    return result;
  };
}

module.exports = applyCustomReduce;
