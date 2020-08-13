'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let firstValue = initialValue;

    for (let i = 0; i < this.length; i++) {
      firstValue = (firstValue !== undefined)
        ? callback(firstValue, this[i], i, this)
        : this[i];
    }

    return firstValue;
  };
}

module.exports = applyCustomReduce;
