'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let start = initialValue;
    let startI = 0;

    if (arguments.length < 2) {
      startI = 1;
      start = this[0];
    }

    for (let i = startI; i < this.length; i++) {
      start = callback(start, this[i], i, this);
    }

    return start;
  };
}

module.exports = applyCustomReduce;
