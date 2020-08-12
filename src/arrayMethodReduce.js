'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let value = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      value = this[0];
      startIndex = 1;
    }

    if (arguments.length < 1) {
      startIndex = 0;
    }

    for (let i = startIndex; i < this.length; i++) {
      value = callback(value, this[i], i, this);
    }

    return value;
  };
}

module.exports = applyCustomReduce;
