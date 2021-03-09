'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (callback) {
      let result = initialValue;
      let startPos = 0;

      if (result === undefined) {
        result = this[0];
        startPos = 1;
      }

      for (let i = startPos; i < this.length; i++) {
        result = callback(result, this[i], i, this);
      }

      return result;
    }
  };
}

module.exports = applyCustomReduce;
