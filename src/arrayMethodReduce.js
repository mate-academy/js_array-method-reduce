'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let initialIndex = 0;
    let prev = initialValue;

    if (arguments.length < 2) {
      initialIndex = 1;
      prev = this[0];
    }

    for (let i = initialIndex; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
};

module.exports = applyCustomReduce;
