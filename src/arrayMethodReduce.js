'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accum;

    if (this.length === 0) {
      return initialValue;
    }

    for (let i = 0; i < this.length; i++) {
      if (i === 0) {
        if (arguments.length === 1) {
          accum = this[i];
          i++;
        } else {
          accum = initialValue;
        }
      }

      accum = callback(accum, this[i], i, this);
    }

    return accum;
  };
}

module.exports = applyCustomReduce;
