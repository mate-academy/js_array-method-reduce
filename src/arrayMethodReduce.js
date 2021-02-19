'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let acc = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      acc = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      acc = (callback(acc, this[i], i, this));
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
