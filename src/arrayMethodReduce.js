'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let reducedValue = arguments.length === 1
      ? this[0]
      : initialValue;

    const startIndex = arguments.length === 1 ? 1 : 0;

    for (let i = startIndex; i < this.length; i++) {
      reducedValue = callback(reducedValue, this[i], i, this);
    }

    return reducedValue;
  };
}

module.exports = applyCustomReduce;
