'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let previous = initialValue;
    let start = 0;

    if (initialValue === undefined) {
      previous = this[0];
      start = 1;
    }

    for (let item = start; item < this.length; item++) {
      previous = callback(previous, this[item], item, this);
    }

    return previous;
  };
}

module.exports = applyCustomReduce;
