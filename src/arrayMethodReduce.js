'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let accumulator = initialValue;
    let strartIndex = 0;

    if (arguments.length === 1) {
      accumulator = this[0];
      strartIndex = 1;
    }

    for (let i = strartIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
