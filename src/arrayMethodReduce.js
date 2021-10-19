'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startValue;
    let index;

    if (arguments.length === 1) {
      startValue = this[0];
      index = 1;
    } else {
      startValue = initialValue;
      index = 0;
    }

    for (let i = index; i < this.length; i++) {
      startValue = callback(startValue, this[i], i, this);
    }

    return startValue;
  };
}

module.exports = applyCustomReduce;
