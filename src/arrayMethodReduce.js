'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const hasLessThanTwoArgs = arguments.length < 2;
    let result = hasLessThanTwoArgs ? this[0] : initialValue;
    const startIndex = hasLessThanTwoArgs ? 1 : 0;

    for (let i = startIndex; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
