'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let startValue = initialValue;
    let start = 0;

    if (arguments.length < 2) {
      startValue = this[0];
      start = 1;
    }

    for(let i = start; i < this.length; i++) {
      startValue = callback(startValue, this[i], i, this);
    }

    return startValue;
  };
}

module.exports = applyCustomReduce;
