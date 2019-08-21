'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let currentValue = initialValue;

    if (arguments.length === 1) {
      currentValue = typeof this[0] === 'number'
        ? this[0]
        : '';
    }

    for (let i = 0; i < this.length; i++) {
      currentValue = callback(currentValue, this[i], i, this);
    }

    return currentValue;
  };
}

module.exports = applyCustomReduce;
