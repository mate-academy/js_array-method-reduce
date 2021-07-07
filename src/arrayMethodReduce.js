'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let currentValue = initialValue;
    let i = arguments.length > 1 ? 0 : 1;

    for (; i < this.length; i++) {
      currentValue = callback(currentValue, this[i], i, this);
    }
    return currentValue;
  };
}

module.exports = applyCustomReduce;
