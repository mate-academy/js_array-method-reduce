'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function (callback, initialValue) {
    let accum = initialValue;
    let beginIndex = 0;

    if (arguments.length === 1) {
      accum = this[0];
      beginIndex = 1;
    }

    for (let index = beginIndex; index < this.length; index++) {
      const currentValue = this[index];

      accum = callback(accum, currentValue, index, this);
    }

    return accum;
  };
}

module.exports = applyCustomReduce;
