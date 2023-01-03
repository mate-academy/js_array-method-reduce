'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startPoint = 0;
    let prevValue = initialValue;

    if (arguments.length < 2) {
      startPoint = 1;
      prevValue = this[0];
    }

    for (let i = startPoint; i < this.length; i++) {
      prevValue = callback(prevValue, this[i], i, this);
    }

    return prevValue;
  };
}

module.exports = applyCustomReduce;
