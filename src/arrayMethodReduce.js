'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev = initialValue;
    let firstIndex = 0;

    if (arguments.length === 1) {
      prev = this[0];
      firstIndex = 1;
    };

    for (let i = firstIndex; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    };

    return prev;
  };
};

module.exports = applyCustomReduce;
