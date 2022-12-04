'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startValue = initialValue;
    let initialIndex = 0;

    if (arguments.length === 1) {
      startValue = this[0];
      initialIndex = 1;
    }

    for (let i = initialIndex; i < this.length; i++) {
      startValue = callback(startValue, this[i], i, this);
    }

    return startValue;
  };
}

module.exports = applyCustomReduce;
