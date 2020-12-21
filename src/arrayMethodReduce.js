'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result;
    let startValue = 0;

    if (initialValue !== undefined) {
      result = initialValue;
    } else {
      result = this[0];
      startValue++;
    }

    for (let i = startValue; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
