'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let previousValue = initialValue;
    let startFromIndex = 0;

    if (arguments.length <= 1) {
      previousValue = this[0];
      startFromIndex = 1;
    }

    for (let i = startFromIndex; i < this.length; i++) {
      previousValue = callback(previousValue, this[i], i, this);
    }

    return previousValue;
  };
}

module.exports = applyCustomReduce;
