'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let value = initialValue;
    const start = arguments.length > 1 ? 0 : 1;
    for (let i = start; i < this.length; i++) {
      value = callback(value, this[i], i, this);
    }
    return value;
  };
}

module.exports = applyCustomReduce;
