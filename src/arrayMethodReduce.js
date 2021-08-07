'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startValue = 0;
    let previousValue = initialValue;

    if (initialValue === undefined) {
      startValue = 1;
      previousValue = this[0];
    }

    for (let i = startValue; i < this.length; i++) {
      previousValue = callback(previousValue, this[i], i, this);
    }

    return previousValue;
  };
}

module.exports = applyCustomReduce;
