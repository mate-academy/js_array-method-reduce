'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let reducedResult = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      reducedResult = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      reducedResult = callback(reducedResult, this[i], i, this);
    }

    return reducedResult;
  };
}

module.exports = applyCustomReduce;
