'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = initialValue;

    for (let i = 0; i < this.length; i++) {
      if (initialValue === undefined && i === 0) {
        result = this[0];
        continue;
      }
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
