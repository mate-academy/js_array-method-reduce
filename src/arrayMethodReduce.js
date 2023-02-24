'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev = initialValue;
    let fromIndex = 0;

    if (arguments.length < 2) {
      fromIndex = 1;
      prev = this[0];
    }

    for (let i = fromIndex; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
};

module.exports = applyCustomReduce;
