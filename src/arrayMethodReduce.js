'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let total;

    if (arguments.length >= 2) {
      total = initialValue;

      for (let i = 0; i < this.length; i++) {
        total = callback(total, this[i], i, this);
      }
    } else {
      total = this[0];

      for (let i = 1; i < this.length; i++) {
        total = callback(total, this[i], i, this);
      }
    }

    return total;
  };
};

module.exports = applyCustomReduce;
