'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startingValue = initialValue;
    let index = 0;

    if (this.length === 0) {
      return startingValue;
    }

    if (this.length === 1 && !startingValue) {
      return this[0];
    }

    if (startingValue === undefined) {
      startingValue = this[0];
      index = 1;
    }

    for (; index < this.length; index++) {
      startingValue = callback(startingValue, this[index], index, this);
    }

    return startingValue;
  };
}

module.exports = applyCustomReduce;
