'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let returnedValue = initialValue;
    let i = 0;

    if (arguments.length === 1) {
      i = 1;
    }

    for (i; i < this.length; i++) {
      returnedValue = callback(returnedValue, this[i], i, this);
    }

    return returnedValue;
  };
}

module.exports = applyCustomReduce;
