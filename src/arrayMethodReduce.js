'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let redusedValue = initialValue;
    if (typeof initialValue === 'string') {
      redusedValue = '';
    }
    for (let i = 0; i < this.length; i++) {
      redusedValue = callback(redusedValue, this[i], i, this);
    }
    return redusedValue;
  };
}

module.exports = applyCustomReduce;
