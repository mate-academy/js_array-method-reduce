'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let value = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      startIndex = 1;
      value = this[0];
    }

    for (let i = startIndex; i < this.length; i++) {
      value = callback(value, this[i], i, this);
    }

    return value;
  };
}

module.exports = applyCustomReduce;
