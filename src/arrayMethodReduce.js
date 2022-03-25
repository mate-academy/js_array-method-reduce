'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const args = [...arguments];
    let startValue = initialValue;
    let startIndex = 0;

    if (args.length === 1) {
      startIndex = 1;
      startValue = this[0];
    }

    for (let i = startIndex; i < this.length; i++) {
      startValue = callback(startValue, this[i], i, this);
    }

    return startValue;
  };
}

module.exports = applyCustomReduce;
