'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startValue;
    let i;

    if (arguments.length > 1) {
      startValue = initialValue;
      i = 0;
    } else {
      startValue = this[0];
      i = 1;
    }

    for (i; i < this.length; i++) {
      startValue = callback(startValue, this[i], i, this);
    }

    return startValue;
  };
}

module.exports = applyCustomReduce;
