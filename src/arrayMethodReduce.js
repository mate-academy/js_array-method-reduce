'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let res;
    let i = 0;

    if (initialValue === undefined) {
      res = this[0];
      i = 1;
    } else {
      res = initialValue;
    }

    for (; i < this.length; i++) {
      res = callback(res, this[i], i, this);
    }

    return res;
  };
}

module.exports = applyCustomReduce;
