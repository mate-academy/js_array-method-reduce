'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prevValue = initialValue;
    let startIdx = 0;

    if (arguments.length === 1) {
      prevValue = this[0];
      startIdx = 1;
    }

    for (let i = startIdx; i < this.length; i++) {
      prevValue = callback(prevValue, this[i], i, this);
    }

    return prevValue;
  };
}

module.exports = applyCustomReduce;
