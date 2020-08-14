'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    if (arguments.length === 0) {
      return undefined;
    };

    let result = initialValue;

    for (let i = 0; i < this.length; i++) {
      if (initialValue === this[0] && i === 0) {
        continue;
      }
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
