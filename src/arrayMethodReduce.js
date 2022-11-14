'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let i = 0;
    let nextVal = initialValue;

    if (arguments.length < 2) {
      nextVal = this[0];
      i = 1;
    }

    for (i; i < this.length; i++) {
      nextVal = callback(nextVal, this[i], i, this);
    }

    return nextVal;
  };
}

module.exports = applyCustomReduce;
