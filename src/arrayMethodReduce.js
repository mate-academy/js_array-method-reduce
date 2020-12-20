'use strict';

/**
 * Implement method Reduce
 */
// eslint-disable-next-line no-unused-vars
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc = initialValue;
    let start = 0;

    if (initialValue === undefined) {
      acc = this[0];
      start = 1;
    }

    for (let i = start; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
