'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startValue = initialValue;
    let index = 0;

    if (arguments.length < 2) {
      index = 1;
      startValue = this[0];
    }

    for (let i = index; i < this.length; i++) {
      startValue = callback(startValue, this[i], i, this);
    }

    return startValue;
  };
}

module.exports = applyCustomReduce;
