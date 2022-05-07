'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const initialValuePassed = arguments.length === 2;

    let sum = initialValuePassed ? initialValue : this[0];

    for (let i = initialValuePassed ? 0 : 1; i < this.length; i++) {
      sum = callback(sum, this[i], i, this);
    }

    return sum;
  };
}

module.exports = applyCustomReduce;
