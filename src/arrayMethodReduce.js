'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startValue = 0;
    let result = initialValue;
    if (result === undefined) {
      result = this[0];
      startValue = 1;
    }
    for (let i = startValue; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }
    return result;
  };
}

module.exports = applyCustomReduce;
