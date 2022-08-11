'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let value = initialValue;
    let start = 0;

    if (arguments.length < 2) {
      start = 1;
      value = this[0];
    }

    for (let i = start; i < this.length; i++) {
      value = callback(value, this[i], i, this);
    }

    return value;
  };
}

module.exports = applyCustomReduce;
