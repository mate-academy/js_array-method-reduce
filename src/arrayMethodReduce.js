'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startValue = initialValue;
    let firstIndex = 0;

    if (arguments.length < 2) {
      startValue = this[0];
      firstIndex = 1;
    }

    for (let i = firstIndex; i < this.length; i++) {
      startValue = callback(startValue, this[i], i, this);
    }

    return startValue;
  };
}

module.exports = applyCustomReduce;
