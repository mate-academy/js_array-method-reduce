'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here

    let start = initialValue;
    let startInd = 0;

    if (arguments.length < 2) {
      start = this[0];
      startInd = 1;
    }

    for (let i = startInd; i < this.length; i++) {
      start = callback(start, this[i], i, this);
    }

    return start;
  };
}

module.exports = applyCustomReduce;
