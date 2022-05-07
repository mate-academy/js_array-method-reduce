'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let previousValue = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      previousValue = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      const current = this[i];
      const index = i;
      const arr = this;

      previousValue = callback(previousValue, current, index, arr);
    }

    return previousValue;
  };
}

module.exports = applyCustomReduce;
