'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startIndex = 0;
    let val = initialValue;

    if (arguments.length < 2) {
      val = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      val = callback(val, this[i], i, this);
    }

    return val;
  };
}

module.exports = applyCustomReduce;
