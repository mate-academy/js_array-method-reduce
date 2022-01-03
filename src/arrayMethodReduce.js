'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let val = initialValue;
    let startInd = 0;

    if (arguments.length < 2) {
      val = this[0];
      startInd = 1;
    }

    for (let i = startInd; i < this.length; i++) {
      val = callback(val, this[i], i, this);
    }

    return val;
  };
}

module.exports = applyCustomReduce;
