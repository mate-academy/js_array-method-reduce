'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = initialValue;
    let start = 0;

    if (arguments.length === 1) {
      start = 1;
      result = this[0];
    }

    for (let i = start; i < this.length; i++) {
      result = (callback(result, this[i], i, this));
    }

    return result;
  };
}

module.exports = applyCustomReduce;
