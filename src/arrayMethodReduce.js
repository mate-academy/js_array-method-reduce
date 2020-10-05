'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let accumulatedValue = initialValue;

    for (let i = arguments.length === 1 ? 1 : 0; i < this.length; i++) {
      accumulatedValue = callback(accumulatedValue, this[i], i, this);
    }

    return accumulatedValue;
  };
}

module.exports = applyCustomReduce;
