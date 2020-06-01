'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let res;

    (isNaN(this[0])) ? res = initialValue : res = 0;

    if (this[0] === this[0] + '' && initialValue === undefined) {
      res = '';
    }

    for (let i = 0; i < this.length; i++) {
      res = callback(res, this[i], i, this);
    }

    return res;
  };
}

module.exports = applyCustomReduce;
