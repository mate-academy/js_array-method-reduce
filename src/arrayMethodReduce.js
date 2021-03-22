'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = this[0];

    if (initialValue === undefined) {
      for (let i = 1; i < this.length; i++) {
        result = callback(result, this[i], i, this);
      }
    } else {
      result = initialValue;

      for (let i = 0; i < this.length; i++) {
        result = callback(result, this[i], i, this);
      }
    }

    return result;
  };
}

module.exports = applyCustomReduce;
