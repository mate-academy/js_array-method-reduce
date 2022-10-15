'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let index = 0;
    let prevResult = initialValue;

    if (arguments.length < 2) {
      index = 1;
      prevResult = this[0];
    }

    for (let i = index; i < this.length; i++) {
      prevResult = (callback(prevResult, this[i], i, this));
    }

    return prevResult;
  };
}

module.exports = applyCustomReduce;
