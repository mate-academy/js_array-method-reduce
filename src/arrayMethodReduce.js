'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue, index = 0) {
    // write code here
    let startIndex = index;
    let result = initialValue;

    if (initialValue === undefined) {
      result = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
