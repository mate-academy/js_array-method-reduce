'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let start = this[0];
    let sameShitAsIndex = 1;

    if (arguments.length === 2) {
      start = initialValue;
      sameShitAsIndex = 0;
    }

    for (let index = sameShitAsIndex; index < this.length; index++) {
      start = callback(start, this[index], index, this);
    }

    return start;
  };
}

module.exports = applyCustomReduce;
