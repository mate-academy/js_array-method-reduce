'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let start, iter;

    if (initialValue !== undefined) {
      start = initialValue;
      iter = 0;
    } else {
      start = this[0];
      iter = 1;
    }

    for (let i = iter; i < this.length; i++) {
      start = callback(start, this[i], i, this);
    }

    return start;
  };
}

module.exports = applyCustomReduce;
