'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = initialValue;
    let startAtIndex = 0;

    if (initialValue === undefined) {
      result = this[0];
      startAtIndex = 1;
    }

    for (let i = startAtIndex; i < this.length; i++) {
      const value = this[i];

      result = callback(result, value, i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
