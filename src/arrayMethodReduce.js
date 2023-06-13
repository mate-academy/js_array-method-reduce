'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let i = 0;
    let resultValue = initialValue;

    if (arguments.length === 1) {
      resultValue = this[0];
      i = 1;
    }

    for (; i < this.length; i++) {
      resultValue = callback(resultValue, this[i], i, this);
    }

    return resultValue;
  };
}

module.exports = applyCustomReduce;
