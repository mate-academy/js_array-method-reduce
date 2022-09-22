'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const existsInitialValue = (arguments.length > 1);
    const startIndex = existsInitialValue
      ? 0
      : 1;
    let previousValue = existsInitialValue
      ? initialValue
      : this[0];

    for (let i = startIndex; i < this.length; i++) {
      previousValue = callback(previousValue, this[i], i, this);
    }

    return previousValue;
  };
}

module.exports = applyCustomReduce;
