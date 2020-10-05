'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let accumulatedValue = initialValue;
    let i = 0;

    if (arguments.length === 1) {
      i = 1;
    }

    for (; i < this.length; i++) {
      accumulatedValue = callback(accumulatedValue, this[i], i, this);
    }

    return accumulatedValue;
  };
}

module.exports = applyCustomReduce;
