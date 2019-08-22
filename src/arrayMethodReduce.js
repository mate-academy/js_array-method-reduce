'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let i = 0;
    let resultValue;
    arguments.length <= 1 ? i = 1 : i = 0;
    arguments.length <= 1 ? resultValue = this[0] : resultValue = initialValue;

    for (; i < this.length; i++) {
      resultValue = callback(resultValue, this[i], i, this);
    };

    return resultValue;
  };
}

module.exports = applyCustomReduce;
