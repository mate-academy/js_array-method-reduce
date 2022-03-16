'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev, index;

    if (arguments.length < 2) {
      prev = this[0];
      index = 1;
    } else {
      prev = initialValue;
      index = 0;
    }

    for (let i = index; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
