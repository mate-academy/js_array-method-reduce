'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let index = 0;
    let start = initialValue;

    if (initialValue === undefined) {
      start = this[0];
      index = 1;
    }

    for (let a = index; a < this.length; a++) {
      start = callback(start, this[a], a, this);
    }

    return start;
  };
}

module.exports = applyCustomReduce;
