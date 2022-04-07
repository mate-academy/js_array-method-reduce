'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let res = initialValue;
    let idx = 0;

    if (arguments.length < 2) {
      res = this[0];
      idx = 1;
    }

    for (let i = idx; i < this.length; i++) {
      res = callback(res, this[i], i, this);
    }

    return res;
  };
}

module.exports = applyCustomReduce;
