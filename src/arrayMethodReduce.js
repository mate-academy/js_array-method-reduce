'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(accumulator, ...startValue) {
    let result = this[0];
    let start = 1;

    if (startValue.length > 0) {
      result = startValue[0];
      start = 0;
    }

    for (let i = start; i < this.length; i++) {
      result = accumulator(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
