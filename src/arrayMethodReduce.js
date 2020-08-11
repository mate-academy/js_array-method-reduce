'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here

    let result = initialValue;
    let startIndex = 0;

    if (initialValue === undefined) {
      startIndex = 1;
      result = this[0];
    }

    for (startIndex; startIndex < this.length; startIndex++) {
      result = callback(result, this[startIndex], startIndex, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
