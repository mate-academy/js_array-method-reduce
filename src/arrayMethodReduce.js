'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = 0) {
    let res = initialValue;

    if (typeof this[0] === 'string') {
      res = '';
    }

    for (let i = 0; i < this.length; i++) {
      res = callback(res, this[i], i, this);

      if (!isNaN(parseInt(res))) {
        res = parseInt(res);
      }
    }

    return res;
  };
}

module.exports = applyCustomReduce;
