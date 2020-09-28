'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let previousResult = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      previousResult = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      previousResult = callback(previousResult, this[i], i, this);
    }

    return previousResult;
  };
}

module.exports = applyCustomReduce;
