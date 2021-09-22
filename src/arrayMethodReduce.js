'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startPosition = 0;
    let startValue = initialValue;

    if (startValue === undefined) {
      startValue = this[0];
      startPosition = 1;
    }

    let res = startValue;

    for (let i = startPosition; i < this.length; i++) {
      res = callback(res, this[i], i, this);
    }

    return res;
  };
}

module.exports = applyCustomReduce;
