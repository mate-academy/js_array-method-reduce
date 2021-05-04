'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let lastResult = initialValue;
    let i = 0;

    if (arguments.length < 2) {
      lastResult = this[0];
      i = 1;
    }

    for (i; i < this.length; i++) {
      lastResult = callback(lastResult, this[i], i, this);
    }

    return lastResult;
  };
}

module.exports = applyCustomReduce;
