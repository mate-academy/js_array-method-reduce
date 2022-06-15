'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prevValue = this[0];
    let initialIndex = 1;

    if (arguments.length > 1) {
      prevValue = initialValue;
      initialIndex = 0;
    }

    for (let i = initialIndex; i < this.length; i++) {
      prevValue = callback(prevValue, this[i], i, this);
    }

    return prevValue;
  };
}

module.exports = applyCustomReduce;
