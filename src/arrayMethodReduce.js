'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(accumulator, initialValue) {
    let result = initialValue;
    let start = 0;

    if (arguments.length < 2) {
      result = this[0];
      start = 1;
    }

    for (let i = start; i < this.length; i++) {
      result = accumulator(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
