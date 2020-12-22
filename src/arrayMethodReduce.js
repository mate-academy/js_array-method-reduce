'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (callback === undefined) {
      return;
    }

    let result = initialValue;
    let i = 0;

    if (result === undefined) {
      result = this[0];
      i = 1;
    }

    for (; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
