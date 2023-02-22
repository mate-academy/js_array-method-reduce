'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let returnValue = initialValue;
    let firstIndex = 0;

    if (arguments.length !== 2) {
      firstIndex = 1;
      returnValue = this[0];
    }

    for (let i = firstIndex; i < this.length; i++) {
      returnValue = callback(returnValue, this[i], i, this);
    }

    return returnValue;
  };
}

module.exports = applyCustomReduce;
