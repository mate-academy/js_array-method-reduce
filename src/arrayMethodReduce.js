'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let lastResult = initialValue;
    let startIndex = 0;

    if (initialValue === undefined) {
      lastResult = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      lastResult = callback(lastResult, this[i], i, this);
    }

    return lastResult;
  };
}

module.exports = applyCustomReduce;
