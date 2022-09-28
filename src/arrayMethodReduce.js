'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let i = 0;
    let start = initialValue;

    if (arguments.length < 2) {
      start = this[i];
      i = 1;
    }

    let previous = start;

    for (; i < this.length; i++) {
      previous = callback(previous, this[i], i, this);
    }

    return previous;
  };
}

module.exports = applyCustomReduce;
