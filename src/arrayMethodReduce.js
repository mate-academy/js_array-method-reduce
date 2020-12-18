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

    for (let i = index; i < this.length; i++) {
      currentValue = callback(currentValue, this[i], i, this);
    }

    return currentValue;
  };
}

module.exports = applyCustomReduce;
