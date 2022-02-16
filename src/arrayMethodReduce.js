'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let storage = initialValue;
    let startFromIndex = 0;

    if (arguments.length < 2) {
      storage = this[0];
      startFromIndex = 1;
    }

    for (let i = startFromIndex; i < this.length; i++) {
      storage = callback(storage, this[i], i, this);
    }

    return storage;
  };
}

module.exports = applyCustomReduce;
