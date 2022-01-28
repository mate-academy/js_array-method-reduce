'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    if (this.length < 1) {
      return initialValue;
    }

    let prev = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
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
