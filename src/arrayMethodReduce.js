'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let start;
    let value;

    if (initialValue !== undefined) {
      value = initialValue;
      start = 0;
    } else {
      value = this[0];
      start = 1;
    }

    for (let i = start; i < this.length; i++) {
      value = callback(value, this[i], i, this);
    }

    return value;
  };
}

module.exports = applyCustomReduce;
