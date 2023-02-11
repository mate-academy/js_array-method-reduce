'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accum = arguments.length < 2 ? this[0] : initialValue;
    const startIndex = arguments.length < 2 ? 1 : 0;

    for (let i = startIndex; i < this.length; i++) {
      accum = callback(accum, this[i], i, this);
    }

    return accum;
  };
}

module.exports = applyCustomReduce;
