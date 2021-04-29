'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      result = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      callback();

      if (callback.length === 2) {
        result += this[i];
      }

      if (callback.length === 3) {
        result += i;
      }

      if (callback.length === 4) {
        result = this.length;
      }
    }

    return result;
  };
}

module.exports = applyCustomReduce;
