'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let start = 0;
    let previousValue = initialValue;

    if (arguments.length < 2) {
      start = 1;
      previousValue = this[0];
    }

    for (let i = start; i < this.length; i++) {
      previousValue = callback(previousValue, this[i], i, this);
    }

    return previousValue;
  };
}
module.exports = applyCustomReduce;
