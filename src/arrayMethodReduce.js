'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prevValue = initialValue;
    let index = 0;

    if (arguments.length < 2) {
      prevValue = this[0];
      index = 1;
    }

    for (let i = index; i < this.length; i++) {
      prevValue = callback(prevValue, this[i], i, this);
    }

    return prevValue;
  };
}

module.exports = applyCustomReduce;
