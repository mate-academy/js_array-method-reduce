'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (!this.length) {
      return initialValue;
    }

    let currentValue = (arguments.length === 2) ? initialValue : this[0];
    const startingIndex = currentValue === this[0] ? 1 : 0;

    for (let i = startingIndex; i < this.length; i++) {
      currentValue = callback(currentValue, this[i], i, this);
    }

    return currentValue;
  };
}

module.exports = applyCustomReduce;
