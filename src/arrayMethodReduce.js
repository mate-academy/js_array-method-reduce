'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let initialIndex = 0;
    let prevValue = initialValue;

    if (arguments.length < 2) {
      initialIndex = 1;
      prevValue = this[0];
    }

    for (let i = initialIndex; i < this.length; i++) {
      prevValue = callback(prevValue, this[i], i, this);
    }

    return prevValue;
  };
}

module.exports = applyCustomReduce;
