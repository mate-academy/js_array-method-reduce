'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let summ = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      summ = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      summ = callback(summ, this[i], i, this);
    }

    return summ;
  };
}

module.exports = applyCustomReduce;
