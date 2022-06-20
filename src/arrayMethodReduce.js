'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let result = initialValue;
    let start = 0;

    if (initialValue === undefined && arguments.length < 2) {
      result = this[0];
      start = 1;
    }

    for (let i = start; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}
applyCustomReduce();

module.exports = applyCustomReduce;
