'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(addToTotal, initialValue) {
    let totalResult = initialValue;
    let start = 0;

    if (arguments.length < 2) {
      totalResult = this[0];
      start = 1;
    }

    for (let i = start; i < this.length; i++) {
      totalResult = addToTotal(totalResult, this[i], i, this);
    }

    return totalResult;
  };
}

module.exports = applyCustomReduce;
