'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let value;
    let i;

    if (arguments.length < 2) {
      value = this[0];
      i = 1;
    } else {
      value = initialValue;
      i = 0;
    }

    for (i; i < this.length; i++) {
      value = callback(value, this[i], i, this);
    }

    return value;
  };
}

module.exports = applyCustomReduce;
