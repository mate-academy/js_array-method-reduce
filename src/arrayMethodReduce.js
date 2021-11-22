'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let tempResultCallback = arguments.length === 1
      ? this[0]
      : initialValue;

    const start = arguments.length === 1
      ? 1
      : 0;

    for (let i = start; i < this.length; i++) {
      tempResultCallback = callback(tempResultCallback, this[i], i, this);
    }

    return tempResultCallback;
  };
}

module.exports = applyCustomReduce;
