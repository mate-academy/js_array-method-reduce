'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = initialValue;

    if (arguments.length === 1) {
      accumulator = this[0];

      for (let i = 1; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
      }
    }

    return accumulator;
  };
  };

module.exports = applyCustomReduce;
