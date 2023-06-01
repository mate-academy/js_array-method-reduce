'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startIdx = 0;
    let result = initialValue;

    if (arguments.length !== 2) {
      result = this[0];
      startIdx = 1;
    }

    for (let i = startIdx; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
