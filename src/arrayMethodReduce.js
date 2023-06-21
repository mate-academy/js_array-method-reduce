'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let reducedValue = arguments.length < 2
      ? this[0]
      : initialValue;

    const index = arguments.length < 2
      ? 1
      : 0;

    for (let i = index; i < this.length; i++) {
      reducedValue = callback(reducedValue, this[i], i, this);
    }

    return reducedValue;
  };
}

module.exports = applyCustomReduce;
