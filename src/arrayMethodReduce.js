'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, startValue) {
    let currentValue = startValue;
    let firstIndex = 0;

    if (arguments.length < 2) {
      currentValue = this[0];
      firstIndex = 1;
    }

    for (let i = firstIndex; i < this.length; i++) {
      currentValue = callback(currentValue, this[i], i, this);
    }

    return currentValue;
  };
}

module.exports = applyCustomReduce;
