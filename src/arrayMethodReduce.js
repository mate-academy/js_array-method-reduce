'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    if (initialValue && this.length === 0) {
      return initialValue;
    }

    if (typeof callback === 'function') {
      let sum = 0;
      let i = 0;

      if (initialValue !== undefined) {
        sum = initialValue;
      } else {
        sum = this[0];
        i = 1;
      }

      for (; i < this.length; i++) {
        sum = callback(sum, this[i], i, this);
      }

      return sum;
    }
  };
}

module.exports = applyCustomReduce;
