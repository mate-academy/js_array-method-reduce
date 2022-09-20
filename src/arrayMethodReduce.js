'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let reducedResult = initialValue;
    let startItem = 0;

    if (arguments.length < 2) {
      reducedResult = this[0];
      startItem = 1;
    }

    for (let i = startItem; i < this.length; i++) {
      reducedResult = callback(reducedResult, this[i], i, this);
    }

    return reducedResult;
  };
}

module.exports = applyCustomReduce;
