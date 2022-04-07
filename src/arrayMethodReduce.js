'use strict';

/**
 * Implement method Reduce
 */

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startIndex;
    let previousValue;

    if (arguments.length <= 1) {
      startIndex = 1;
      previousValue = this[0];
    } else {
      startIndex = 0;
      previousValue = initialValue;
    }

    for (let i = startIndex; i < this.length; i++) {
      previousValue = callback(previousValue, this[i], i, this);
    }

    return previousValue;
  };
}

module.exports = applyCustomReduce;
