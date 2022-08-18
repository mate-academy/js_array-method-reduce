'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc = initialValue;
    let currentValue = 0;

    if (arguments.length < 2) {
      acc = this[0];
      currentValue++;
    }

    for (let i = currentValue; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
};

module.exports = applyCustomReduce;
