'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let currenIndex = 0;
    let currentValue = initialValue;

    if (currentValue === undefined) {
      currentValue = this[0];
      currenIndex++;
    }

    for (let i = currenIndex; i < this.length; i++) {
      currentValue = callback(currentValue, this[i], i, this);
    }

    return currentValue;
  };
}

module.exports = applyCustomReduce;
