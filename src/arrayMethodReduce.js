'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let currentValue = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      currentValue = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      currentValue = callback(currentValue, this[i], i, this);
    }

    return currentValue;
  };
}

module.exports = applyCustomReduce;
