'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    if (this.length === 0) {
      return initialValue;
    }

    let prevValue = this[0];
    let startIndex = 1;

    if (arguments.length > 1) {
      prevValue = initialValue;
      startIndex--;
    }

    for (let i = startIndex; i < this.length; i++) {
      prevValue = callback(prevValue, this[i], i, this);
    }

    return prevValue;
  };
}

module.exports = applyCustomReduce;
