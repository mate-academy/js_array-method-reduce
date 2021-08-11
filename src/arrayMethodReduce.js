'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulationValue = initialValue;
    let fromIndex = 0;

    if (arguments.length < 2) {
      accumulationValue = this[0];
      fromIndex = 1;
    }

    for (let i = fromIndex; i < this.length; i++) {
      accumulationValue = callback(accumulationValue, this[i], i, this);
    }

    return accumulationValue;
  };
}

module.exports = applyCustomReduce;
