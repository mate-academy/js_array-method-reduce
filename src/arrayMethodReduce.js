'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc = initialValue;
    let startValue = 0;

    if (arguments.length < 2) {
      acc = this[0];
      startValue = 1;
    }

    for (let index = startValue; index < this.length; index++) {
      acc = callback(acc, this[index], index, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
