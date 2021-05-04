'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulation = initialValue;
    let start = 0;

    if (accumulation === undefined) {
      accumulation = this[0];
      start = 1;
    };

    for (let i = start; i < this.length; i++) {
      accumulation = callback(accumulation, this[i], i, this);
    };

    return accumulation;
  };
}

module.exports = applyCustomReduce;
