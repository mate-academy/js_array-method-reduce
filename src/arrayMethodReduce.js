'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let previous = initialValue;
    let firstIndex = 0;

    if (arguments.length < 2) {
      previous = this[0];
      firstIndex = 1;
    }

    for (let i = firstIndex; i < this.length; i++) {
      previous = callback(previous, this[i], i, this);
    }

    return previous;
  };
}

module.exports = applyCustomReduce;
