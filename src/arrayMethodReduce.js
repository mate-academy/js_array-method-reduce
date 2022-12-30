'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let start = 0;
    let startIndex = initialValue;

    if (arguments.length === 1) {
      start = 1;
      startIndex = this[0];
    }

    for (let i = start; i < this.length; i++) {
      startIndex = callback(startIndex, this[i], i, this);
    }

    return startIndex;
  };
}

module.exports = applyCustomReduce;
