'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let accumulator = initialValue;
    let start = 0;
    let startVal = initialValue;

    if (initialValue === undefined) {
      if (typeof this[0] === 'string') {
        startVal = '';
      } else {
        startVal = 0;
      }
      accumulator = this[0];
      start = 1;
    }

    for (let i = start; i < this.length; i++) {
      accumulator += callback(startVal, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
