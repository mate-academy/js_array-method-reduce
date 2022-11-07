'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let index = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      index = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      index = callback(index, this[i], i, this);
    }

    return index;
  };
}
module.exports = applyCustomReduce;
