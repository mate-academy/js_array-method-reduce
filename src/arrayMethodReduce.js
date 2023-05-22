'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const startIndex = (arguments.length === 1) ? 1 : 0;
    let startValue = (arguments.length === 1)
      ? this[0]
      : initialValue;

    for (let i = startIndex; i < this.length; i++) {
      startValue = callback(startValue, this[i], i, this);
    }

    return startValue;
  };
}

module.exports = applyCustomReduce;
