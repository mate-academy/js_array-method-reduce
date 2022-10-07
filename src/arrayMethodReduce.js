'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let previous = initialValue;
    let start = 0;

    if (arguments.length < 2) {
      previous = this[0];
      start = 1;
    }

    for (let i = start; i < this.length; i++) {
      previous = callback(previous, this[i], i, this);
    }

    return previous;
  };
}

module.exports = applyCustomReduce;
