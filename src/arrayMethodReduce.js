'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let firstValue = initialValue;
    let start;

    if (arguments.length === 1) {
      firstValue = this[0];
      start = 1;
    } else {
      start = 0;
    }

    for (let i = start; i < this.length; i++) {
      firstValue = callback(firstValue, this[i], i, this);
    }

    return firstValue;
  };
}

module.exports = applyCustomReduce;
