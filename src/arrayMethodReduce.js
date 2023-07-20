'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const initialValuePassed = arguments.length > 1;

    let result = initialValuePassed ? initialValue : this[0];
    const start = initialValuePassed ? 0 : 1;

    for (let i = start; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
