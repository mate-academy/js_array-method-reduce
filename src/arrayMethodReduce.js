'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let res = initialValue;
    if (res === undefined) {
      res = this[0];
      for (let i = 1; i < this.length; i++) {
        res = callback(res, this[i], i, this);
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        res = callback(res, this[i], i, this);
      }
    }

    return res;
  };
}

module.exports = applyCustomReduce;
