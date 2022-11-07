'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let index = initialValue;
    let i = 0;

    if (arguments.length < 2) {
      index = this[0];
      i = 1;
    }

    for (i; i < this.length; i++) {
      index = callback(index, this[i], i, this);
    }

    return index;
  };
}
module.exports = applyCustomReduce;
