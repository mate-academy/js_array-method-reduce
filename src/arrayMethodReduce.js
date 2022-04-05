'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let res;
    let startIndex = 0;

    if (!initialValue && arguments.length === 1) {
      res = this[0];
      startIndex = 1;
    } else {
      res = initialValue;
    }

    if (arguments.length === 2 && initialValue === undefined) {
      res = `${initialValue}`;
    }

    for (let i = startIndex; i < this.length; i++) {
      res = callback(res, this[i], i, this);
    }

    return res;
  };
}

module.exports = applyCustomReduce;
