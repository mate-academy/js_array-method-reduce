'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let previousValue = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      startIndex = 1;
      previousValue = this[0];
    }

    for (let i = startIndex; i < this.length; i++) {
      previousValue = callback(previousValue, this[i], i, this);
    }

    return previousValue;
  };
}

module.exports = applyCustomReduce;
