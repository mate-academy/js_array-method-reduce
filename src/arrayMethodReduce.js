'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc = (initialValue === undefined) ? this[0] : initialValue;
    const index = (initialValue === undefined) ? 1 : 0;

    for (let i = index; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
};

module.exports = applyCustomReduce;
