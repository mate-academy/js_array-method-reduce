'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (this.length === 0) {
      return initialValue;
    }

    let result;
    let startValue = initialValue;
    let startIndex = 0;

    if (arguments.length === 1) {
      startValue = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      result = callback(startValue, this[i], i, this);
      startValue = result;
    }

    return result;
  };
}

module.exports = applyCustomReduce;
