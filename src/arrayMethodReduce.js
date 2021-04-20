'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue, index) {
    // write code here
    let accum = (initialValue === undefined) ? this[0] : initialValue;
    const start = (initialValue === undefined) ? 1 : 0;

    for (let i = start; i < this.length; i++) {
      accum = callback(accum, this[i], i, this);
    }

    return accum;
  };
}

module.exports = applyCustomReduce;
