'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let finalValue = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      finalValue = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      finalValue = callback(finalValue, this[i], i, this);
    }

    return finalValue;
  };
}

module.exports = applyCustomReduce;
