'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let res = initialValue;
    let start = 0;

    if (arguments.length < 2) {
      start = 1;
      res = this[0];
    }

    for (let i = start; i < this.length; i++) {
      res = callback(res, this[i], i, this);
    }

    return res;
  };
}

module.exports = applyCustomReduce;
