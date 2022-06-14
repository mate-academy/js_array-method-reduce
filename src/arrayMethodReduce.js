'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let resultValue = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      resultValue = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      resultValue = callback(resultValue, this[i], i, this);
    }

    return resultValue;
  };
}

module.exports = applyCustomReduce;
