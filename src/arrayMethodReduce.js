'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result;

    if (this.length === 0) {
      return initialValue;
    }

    for (let i = 0; i < this.length; ++i) {
      if (i === 0) {
        result = initialValue;

        if (initialValue === undefined) {
          result = this[0];
          i = 1;
        }
      }
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
