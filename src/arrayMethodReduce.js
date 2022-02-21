'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let acc = initialValue;
    let start = 0;

    if (arguments.length < 2) {
      start = 1;
      acc = this[0];
    }

    for (let i = start; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
