'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startVal = 0;
    let lastVal = initialValue;

    if (arguments.length === 1) {
      startVal = 1;
      lastVal = this[0];
    }

    for (let i = startVal; i < this.length; i++) {
      lastVal = callback(lastVal, this[i], i, this);
    }

    return lastVal;
  };
}

module.exports = applyCustomReduce;
