'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let value;
    let index;

    if (arguments.length > 1) {
      value = initialValue;
      index = 0;
    } else {
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
