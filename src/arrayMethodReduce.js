'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startValue = initialValue;
    let startIndex = 0;

    if (arguments < 2) {
      startValue = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; this.length; i++) {
      startValue = callback(startValue, this[i], i, this);
    }

    return startValue;
  };
}

module.exports = applyCustomReduce;
