'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let start = 0;
    let result = initialValue;

    if (initialValue === undefined) {
      result = this[0];
      start = 1;
    }

    for (let i = start; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
