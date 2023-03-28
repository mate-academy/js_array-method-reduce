'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = 'undefined') {
    let prevValue = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      prevValue = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      prevValue = callback(prevValue, this[i], i, this);
    }

    return prevValue;
  };
}

module.exports = applyCustomReduce;
