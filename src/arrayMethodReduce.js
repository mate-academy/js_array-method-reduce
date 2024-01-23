'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let initial = initialValue;
    let startValue = 0;

    if (arguments.length < 2) {
      initial = this[0];
      startValue = 1;
    }

    for (let i = startValue; i < this.length; i++) {
      initial = callback(initial, this[i], i, this);
    }

    return initial;
  };
}

module.exports = applyCustomReduce;
