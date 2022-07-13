'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let res = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      res = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      res = callback(res, this[i], i, this);
    }

    return res;
  };
}

module.exports = applyCustomReduce;
