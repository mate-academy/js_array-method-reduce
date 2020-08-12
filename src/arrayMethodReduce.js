'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let start;
    let accummulator;

    if (arguments.length < 2) {
      accummulator = this[0];
      start = 1;
    } else {
      accummulator = initialValue;
      start = 0;
    }

    for (let i = start; i < this.length; i++) {
      accummulator = callback(accummulator, this[i], i, this);
    }

    return accummulator;
  };
}

module.exports = applyCustomReduce;
