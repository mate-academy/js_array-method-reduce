'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let index = 0;
    let total = initialValue;

    if (arguments.length === 1) {
      index = 1;
      total = this[0];
    }

    for (let i = index; i < this.length; i += 1) {
      total = callback(total, this[i], i, this);
    }

    return total;
  };
}

module.exports = applyCustomReduce;
