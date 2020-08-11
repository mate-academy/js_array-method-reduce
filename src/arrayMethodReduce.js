'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let result = initialValue;
    let start = 0;

    if (arguments.length === 1) {
      start = 1;
    }

    for (start; this.length > start; start++) {
      result = callback(result, this[start], start, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
