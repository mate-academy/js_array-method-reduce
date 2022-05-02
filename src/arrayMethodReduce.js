'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let reduced = initialValue;
    let start = 0;

    if (arguments.length < 2) {
      start = 1;
      reduced = this[0];
    }

    for (let i = start; i < this.length; i++) {
      reduced = callback(reduced, this[i], i, this);
    }

    return reduced;
  };
}

module.exports = applyCustomReduce;
