'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, startValue = this[0]) {
    let previousValue = startValue;
    const startIndex = startValue === this[0] ? 1 : 0;

    for (let i = startIndex; i < this.length; i++) {
      previousValue = callback(previousValue, this[i], i, this);
    };

    return previousValue;
  };
}

module.exports = applyCustomReduce;
