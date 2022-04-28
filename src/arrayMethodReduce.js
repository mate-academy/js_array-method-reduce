'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let start = initialValue;
    let index = 0;

    if (arguments.length === 1) {
      start = this[0];
      index = 1;
    }

    for (index; index < this.length; index++) {
      start = callback(start, this[index], index, this);
    }

    return start;
  };
}

module.exports = applyCustomReduce;
