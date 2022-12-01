'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let lastResult = initialValue;
    let index = 0;

    if (arguments.length < 2) {
      index = 1;
      lastResult = this[0];
    }

    for (let i = index; i < this.length; ++i) {
      lastResult = callback(lastResult, this[i], i, this);
    }

    return lastResult;
  };
}

module.exports = applyCustomReduce;
