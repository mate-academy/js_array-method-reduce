'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (typeof callback !== 'function') {
      return;
    }

    const startIndex = arguments.length > 1 ? 0 : 1;
    let startValue = arguments.length > 1 ? initialValue : this[0];

    for (let i = startIndex; i < this.length; i++) {
      startValue = callback(startValue, this[i], i, this);
    }

    return startValue;
  };
}

module.exports = applyCustomReduce;
