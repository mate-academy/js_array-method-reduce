'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let result = initialValue;
    let index = 0;

    if (initialValue === undefined) {
      result = this[0];
      index = 1;
    }

    while (index < this.length) {
      result = callback(result, this[index], index, this);
      index++;
    }

    return result;
  };
}

module.exports = applyCustomReduce;
