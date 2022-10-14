'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    if (!this.length) {
      return initialValue;
    }

    let acc = initialValue;
    let index = 0;

    if (arguments.length < 2) {
      acc = this[0];
      index = 1;
    }

    for (; index < this.length; index++) {
      acc = callback(acc, this[index], index, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
