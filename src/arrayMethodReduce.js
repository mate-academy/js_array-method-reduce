'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prevCallResult;
    let i = 0;

    if (arguments.length === 1) {
      prevCallResult = this[0];
      i = 1;
    } else {
      prevCallResult = initialValue;
    }

    while (i < this.length) {
      prevCallResult = callback(prevCallResult, this[i], i, this);
      i++;
    }

    return prevCallResult;
  };
}

module.exports = applyCustomReduce;
