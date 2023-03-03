'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let startValue = initialValue;

    if (arguments.length < 2) {
      startValue = this[0];
    }

    const startIndex = (arguments.length < 2) ? 1 : 0;

    for (let i = startIndex; i < this.length; i++) {
      startValue = callback(startValue, this[i], i, this);
    }

    return startValue;
  };
}

module.exports = applyCustomReduce;
