'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc = arguments.length > 1 ? initialValue : this[0];
    const startIndex = arguments.length > 1 ? 0 : 1;

    for (let i = startIndex; i < this.length; i += 1) {
      if ((this[i], i, this)) {
        acc = callback(acc, this[i], i, this);
      }
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
