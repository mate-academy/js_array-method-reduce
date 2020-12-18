'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let currentValue = initialValue;
    let index = 0;

    if (currentValue === undefined) {
      index = 1;
      currentValue = this[0];
    }

    for (index; index < this.length; index++) {
      currentValue = callback(currentValue, this[index], index, this);
    }

    return currentValue;
  };
}

module.exports = applyCustomReduce;
