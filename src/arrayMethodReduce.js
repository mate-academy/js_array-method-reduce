'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc = initialValue;
    let startIndex = 0;

    if (initialValue === undefined) {
      startIndex = 1;
      acc = this[0];
    };

    for (let i = startIndex; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    };

    return acc;
  };
}

module.exports = applyCustomReduce;
