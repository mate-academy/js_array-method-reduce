'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = initialValue;
    let startIndex = 0;

    if (initialValue === undefined) {
      result = callback(this[0], this[1], 1, this);
      startIndex = 2;
    }

    for (let i = startIndex; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
