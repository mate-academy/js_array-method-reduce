'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (!this.length) {
      return initialValue;
    }

    let currentValue;
    let startingIndex = 0;

    if (arguments.length === 2) {
      currentValue = initialValue;
    } else {
      currentValue = this[0];
      startingIndex++;
    }

    for (let i = startingIndex; i < this.length; i++) {
      currentValue = callback(currentValue, this[i], i, this);
    }

    return currentValue;
  };
}

module.exports = applyCustomReduce;
