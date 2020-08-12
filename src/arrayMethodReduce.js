'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (callback === undefined) {
      return new TypeError('Uncaught TypeError: undefined is not a function');
    }

    let result = initialValue;
    let startIndex = 0;

    if (initialValue === undefined) {
      result = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
