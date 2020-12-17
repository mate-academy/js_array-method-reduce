'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let value;
    let start;

    if (initialValue === undefined) {
      value = this[0];
      start = 1;
    } else {
      value = initialValue;
      start = 0;
    }

    for (let i = start; i < this.length; i++) {
      value = callback(value, this[i], i, this);
    }

    return value;
  };
}

module.exports = applyCustomReduce;
