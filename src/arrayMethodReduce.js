'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const isInitialValue = arguments.length === 2;

    const startingIndex = isInitialValue ? 0 : 1;
    let previousValue = isInitialValue ? initialValue : this[0];

    for (let i = startingIndex; i < this.length; i++) {
      previousValue = callback(previousValue, this[i], i, this);
    }

    return previousValue;
  };
}

module.exports = applyCustomReduce;
