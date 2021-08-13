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
      result = this[0];
      startIndex = 1;
    }

    for (let index = startIndex; index < this.length; index++) {
      result = callback(result, this[index], index, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
