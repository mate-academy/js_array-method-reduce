'use strict';

/**
 * Implement method Reduce
 */

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let reduced = initialValue;
    let i = 0;

    if (arguments.length < 2) {
      reduced = this[0];
      i = 1;
    }

    for (; i < this.length; i++) {
      reduced = callback(reduced, this[i], i, this);
    }

    return reduced;
  };
}

module.exports = applyCustomReduce;
