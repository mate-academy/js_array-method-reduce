'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc;
    let index;

    if (initialValue === undefined) {
      acc = this[0];
      index = 1;
    } else {
      acc = initialValue;
      index = 0;
    }

    for (let i = index; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
