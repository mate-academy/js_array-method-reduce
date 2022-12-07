'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let previousVal = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      previousVal = this[0];
      startIndex = 1;
    }

    while (startIndex < this.length) {
      previousVal = callback(previousVal, this[startIndex], startIndex, this);
      startIndex++;
    }

    return previousVal;
  };
}

module.exports = applyCustomReduce;
