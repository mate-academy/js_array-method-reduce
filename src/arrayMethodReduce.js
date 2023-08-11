'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let index = 1;
    let accum = this[0];

    if (arguments.length > 1) {
      index = 0;
      accum = initialValue;
    }

    for (let i = index; i < this.length; i++) {
      accum = callback(accum, this[i], i, this);
    }

    return accum;
  };
}

module.exports = applyCustomReduce;
