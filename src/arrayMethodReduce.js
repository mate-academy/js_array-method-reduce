'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (callback) {
      let value = initialValue;
      let start = 0;

      if (value === undefined) {
        value = this[0];
        start = 1;
      }

      for (let i = start; i < this.length; i++) {
        value = callback(value, this[i], i, this);
      }

      return value;
    } else {
      throw new Error('Callback is not found');
    }
  };
}

module.exports = applyCustomReduce;
