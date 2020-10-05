'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let endValue = initialValue;
    let start = 0;

    if (initialValue === undefined) {
      endValue = this[0];
      start = 1;
    }

    for (let i = start; i < this.length; i++) {
      endValue = callback(endValue, this[i], i, this);
    }

    return endValue;
  };
}

module.exports = applyCustomReduce;
