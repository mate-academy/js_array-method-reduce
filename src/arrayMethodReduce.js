'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result;

    if (initialValue !== undefined) {
      result = initialValue;
    } else {
      result = this[0];
    }

    for (let i = 0; i < this.length; i++) {
      if (initialValue === undefined) {
        if (this[i + 1] !== undefined) {
          result = callback(result, this[i + 1], i + 1, this);
        }
      } else {
        if (this[i] !== undefined) {
          result = callback(result, this[i], i, this);
        }
      }
    }

    return result;
  };
}

module.exports = applyCustomReduce;
