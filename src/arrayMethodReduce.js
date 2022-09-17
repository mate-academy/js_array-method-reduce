'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let stepValue = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      stepValue = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      stepValue = callback(stepValue, this[i], i, this);
    }

    return stepValue;
  };
}

module.exports = applyCustomReduce;
