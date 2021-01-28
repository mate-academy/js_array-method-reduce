'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let prev = initialValue;
    let startFrom = 0;

    if (initialValue === undefined) {
      prev = this[0];
      startFrom = 1;
    }

    for (let i = startFrom; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
