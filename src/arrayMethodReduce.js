'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let returnedValue = initialValue;

    if (arguments.length === 1) {
      for (let i = 1; i < this.length; i++) {
        returnedValue = callback(returnedValue, this[i], i, this);
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        returnedValue = callback(returnedValue, this[i], i, this);
      }
    }

    return returnedValue;
  };
}

module.exports = applyCustomReduce;
