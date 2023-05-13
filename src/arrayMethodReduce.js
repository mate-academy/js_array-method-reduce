'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev;
    let fromIndex;

    if (arguments.length < 2) {
      prev = this[0];
      fromIndex = 1;
    } else {
      prev = initialValue;
      fromIndex = 0;
    }

    for (let i = fromIndex; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
};

module.exports = applyCustomReduce;
