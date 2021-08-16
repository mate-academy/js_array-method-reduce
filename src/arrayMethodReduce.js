'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let firstVal = initialValue;
    let startInd = 0;

    if (arguments.length < 2) {
      firstVal = this[0];
      startInd = 1;
    }

    for (let i = startInd; i < this.length; i++) {
      firstVal = callback(firstVal, this[i], i, this);
    }

    return firstVal;
  };
}

module.exports = applyCustomReduce;
