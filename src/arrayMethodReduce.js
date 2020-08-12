'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let result = initialValue;

    for (let i = 0; i < this.length; i++) {
      if (result === undefined) {
        result = this[0];
        i++;
      }
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
