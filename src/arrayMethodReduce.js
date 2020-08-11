'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    const result = [];

    if (initialValue !== this[0]) {
      result.push(callback(initialValue, this[0], 0, this));
    } else {
      result.push(this[0]);
    }

    for (let i = 1; i < this.length; i++) {
      result.push(callback(result[i - 1], this[i], i, this));
    }

    return result[result.length - 1];
  };
};

module.exports = applyCustomReduce;
