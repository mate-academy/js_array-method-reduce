'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accum;
    let startPos = 0;

    if (arguments.length === 1) {
      accum = this[0];
      startPos = 1;
    } else {
      accum = initialValue;
    };

    for (let i = startPos; i < this.length; i++) {
      accum = callback(accum, this[i], i, this);
    }

    return accum;
  };
}

module.exports = applyCustomReduce;
