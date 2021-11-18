'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let prevCallResult = initialValue;

    for (let i = 1; i < this.length; i++) {
      prevCallResult = callback(prevCallResult, this[i], i, this);
    }

    return prevCallResult;
  };
}

module.exports = applyCustomReduce;
