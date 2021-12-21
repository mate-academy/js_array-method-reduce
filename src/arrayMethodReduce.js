'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, startValue) {
    let startIndex = 0;
    let previous = startValue;

    if (arguments.length < 2) {
      startIndex = 1;
      previous = this[0];
    }

    for (let i = startIndex; i < this.length; i++) {
      previous = callback(previous, this[i], i, this);
    }

    return previous;
  };
}

module.exports = applyCustomReduce;
