'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accum = initialValue;
    let index = 0;

    if (arguments.length === 1) {
      accum = this[0];
      index = 1;
    }

    while (this.length > index) {
      accum = callback(accum, this[index], index, this);

      index++;
    }

    return accum;
  };
}

module.exports = applyCustomReduce;
