'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev = initialValue;
    let startIdx = 0;

    if (arguments.length < 2) {
      prev = this[0];
      startIdx = 1;
    }

    for (let i = startIdx; i < this.length; i++) {
      prev += callback(initialValue, this[i], i, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
