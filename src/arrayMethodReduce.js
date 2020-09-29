'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      result = this[0];
      startIndex = 1;
    }

    for (let i = startIndex, l = this.length; i < l; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
