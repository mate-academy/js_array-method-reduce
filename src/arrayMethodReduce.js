'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let start = 0;
    let prev = initialValue;

    if (initialValue === undefined) {
      prev = this[0];
      start = 1;
    }

    for (let i = start; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
