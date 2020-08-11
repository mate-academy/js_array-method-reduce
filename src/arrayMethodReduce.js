'use strict';

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let sum = initialValue;
    let i = 0;
    const len = this.length;

    if (sum === undefined) {
      sum = this[0];
      i = 1;
    }

    while (i < len) {
      sum = callback(sum, this[i], i, this);
      i++;
    }

    return sum;
  };
}

module.exports = applyCustomReduce;
