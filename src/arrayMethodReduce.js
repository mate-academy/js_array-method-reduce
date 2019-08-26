'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc = this[0];
    let count = 1;

    if (arguments[1] !== undefined) {
      acc = initialValue;
      count = 0;
    }

    for (count; count < this.length; count++) {
      acc = callback(acc, this[count], count, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
