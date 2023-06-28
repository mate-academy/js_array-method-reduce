'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let resultValue = initialValue;
    let startValue = 0;

    if (arguments.length < 2) {
      resultValue = this[0];
      startValue = 1;
    }

    for (let index = startValue; index < this.length; index++) {
      resultValue = callback(resultValue, this[index], index, this);
    }

    return resultValue;
  };
}

module.exports = applyCustomReduce;
