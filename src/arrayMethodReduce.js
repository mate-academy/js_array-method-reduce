'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let i = 0;
    let value = initialValue;

    if (arguments.length < 2) {
      i = 1;
      value = this[0];
    }

    for (i; i < this.length; i++) {
      value = callback(value, this[i], i, this);
    }

    return value;
  };
}

module.exports = applyCustomReduce;
