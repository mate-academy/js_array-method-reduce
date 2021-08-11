'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulationValue = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      accumulationValue = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      accumulationValue = callback(accumulationValue, this[i], i, this);
    }

    return accumulationValue;
  };
}

module.exports = applyCustomReduce;
