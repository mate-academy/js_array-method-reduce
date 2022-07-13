'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let value = (arguments.length === 1) ? this[0] : initialValue;
    const start = (arguments.length === 1) ? 1 : 0;

    for (let i = start; i < this.length; i++) {
      value = callback(value, this[i], i, this);
    }

    return value;
  };
}

module.exports = applyCustomReduce;
