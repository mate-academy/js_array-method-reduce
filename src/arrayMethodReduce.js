'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result, startIndex;

    if (arguments.length < 2) {
      result = this[0];
      startIndex = 1;
    } else {
      result = initialValue;
      startIndex = 0;
    }

    for (let i = startIndex; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
