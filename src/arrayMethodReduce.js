'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let result;
    if (initialValue !== undefined) {
      result = initialValue;
      for (let i = 0; i < this.length; i++) {
        result = callback(result, this[i], i, this);
      }
      return result;
    }

    result = callback(this[0], this[1], 1, this);
    for (let i = 2; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }
    return result;
  };
}

module.exports = applyCustomReduce;
