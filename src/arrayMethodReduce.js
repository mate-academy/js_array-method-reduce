/* eslint-disable no-console */
'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let result = initialValue;
    let index = 0;

    if (arguments.length < 2) {
      result = this[0];
      index = 1;
    }

    for (let i = index; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
