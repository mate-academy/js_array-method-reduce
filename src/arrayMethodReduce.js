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
      if (initialValue !== undefined) {
        let sum = initialValue;

        for (let i = 0; i < this.length; i++) {
          sum = callback(sum, this[i], i, this);
        }

        return sum;
      } else {
        let sum = this[0];

        for (let i = 1; i < this.length; i++) {
          sum = callback(sum, this[i], i, this);
        }

        return sum;
      }
    }
  };
}

module.exports = applyCustomReduce;
