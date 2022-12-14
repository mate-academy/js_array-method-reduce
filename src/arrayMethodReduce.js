'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc = initialValue;
    let startValue = 0;

    if (arguments.length === 1) {
      startValue = 1;
      acc = this[0];
    }

    for (let i = startValue; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
};

module.exports = applyCustomReduce;
