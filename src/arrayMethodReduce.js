'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startPosition = 1;
    let value = this[0];

    if (arguments.length >= 2) {
      startPosition = 0;
      value = initialValue;
    }

    for (let i = startPosition; i < this.length; i++) {
      value = callback(value, this[i], i, this);
    }

    return value;
  };
}

module.exports = applyCustomReduce;
