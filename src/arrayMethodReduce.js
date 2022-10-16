'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const index = arguments.length < 2 ? 1 : 0;
    let prevResult = index === 1 ? this[0] : initialValue;

    for (let i = index; i < this.length; i++) {
      prevResult = (callback(prevResult, this[i], i, this));
    }

    return prevResult;
  };
}

module.exports = applyCustomReduce;
