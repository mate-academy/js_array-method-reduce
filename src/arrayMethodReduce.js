'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let prev;
    let startIndex;

    if (initialValue !== undefined) {
      prev = initialValue;
      startIndex = 0;
    } else {
      prev = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
