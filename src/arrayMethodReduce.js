'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accum = initialValue;

    for (let i = 0; i < this.length; i++) {
      if (arguments.length < 2 && i === 0) {
        accum = this[0];
        i++;
      }
      accum = callback(accum, this[i], i, this);
    }

    return accum;
  };
}

module.exports = applyCustomReduce;
