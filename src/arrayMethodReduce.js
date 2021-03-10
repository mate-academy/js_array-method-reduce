'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (callback) {
      let result = initialValue;
      let start = 0;

      if (result === undefined) {
        result = this[0];
        start = 1;
      }

      for (let i = start; i < this.length; i++) {
        result = callback(result, this[i], i, this);
      }

      return result;
    }
  };
}

module.exports = applyCustomReduce;
