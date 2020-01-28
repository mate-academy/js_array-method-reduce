'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let value = initialValue;

    for (let i = 0; i < this.length; i++) {
      if (value === undefined) {
        value = this[i];
      } else {
        value = callback(value, this[i], i, this);
      }
    }

    return value;
  };
}

module.exports = applyCustomReduce;
