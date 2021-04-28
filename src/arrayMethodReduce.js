'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let value = initialValue;
    let index = 0;

    if (initialValue === undefined) {
      value = this[0];
      index = 1;
    }

    for (let i = index; i < this.length; i++) {
      value = callback(value, this[i], i, this);
    }

    return value;
  };
}

module.exports = applyCustomReduce;
