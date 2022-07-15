'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here

    let prev = initialValue;
    let startindex = 0;

    if (arguments.length < 2) {
      prev = this[0];
      startindex = 1;
    }

    for (let i = startindex; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
