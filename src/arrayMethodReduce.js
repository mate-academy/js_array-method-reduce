'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let currentValue = initialValue;
    let index = 0;

    if (initialValue === undefined) {
      currentValue = this[0];
      index = 1;
    }

    for (let i = index; i < this.length; i++) {
      currentValue = callback(currentValue, this[i], i, this);
    }

    return currentValue;
  };
}

module.exports = applyCustomReduce;
