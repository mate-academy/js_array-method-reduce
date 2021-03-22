'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result;
    let startIndex = 0;
    if (initialValue !== undefined) {
      result = initialValue;
    } else {
      result = this[0];
      startIndex = 1;
    }
    for (let i = startIndex; i < this.length; i++) {
      const item = this[i];
      const index = i;
      const arr = this;
      result = callback(result, item, index, arr);
    }
    return result;
  };
}

module.exports = applyCustomReduce;
