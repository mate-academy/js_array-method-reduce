'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = this[0];
    let start = 1;

    if (arguments.length === 2) {
      result = initialValue;
      start = 0;
    }

    for (let i = start; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
