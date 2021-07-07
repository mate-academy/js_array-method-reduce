'use strict';

/**
 * Implement method Reduce
 */

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let currentValue = arguments.length <= 1
      ? this[0]
      : initialValue;

    let i = arguments.length <= 1 ? 1 : 0;

    for (i; i < this.length; i++) {
      currentValue = callback(currentValue, this[i], i, this);
    }

    return currentValue;
  };
}

module.exports = applyCustomReduce;
