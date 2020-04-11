'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let prevValue = initialValue;
    let startIndex = 0;

    if (initialValue === this[0]) {
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      prevValue = callback(prevValue, this[i], i, this);
    }

    return prevValue;
  };
}

module.exports = applyCustomReduce;
