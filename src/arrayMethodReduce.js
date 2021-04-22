'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result;

    if (initialValue >= 0) {
      result = initialValue;

      for (let i = 0; i < this.length; i++) {
        result = callback(result, this[i], i, this);
      }
    } else {
      result = this[0];

      for (let i = 1; i < this.length; i++) {
        result = callback(result, this[i], i, this);
      }
    }

    return result;
  };
}

module.exports = applyCustomReduce;
