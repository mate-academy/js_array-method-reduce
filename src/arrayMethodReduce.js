'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let index = 0;
    let result = initialValue;

    if (this.length < 1) {
      return result;
    }

    if (arguments.length < 2) {
      index = 1;
      result = this[0];
    }

    for (let i = index; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
