'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumValue = initialValue;
    let start = 0;

    if (initialValue === undefined) {
      accumValue = this[0];
      start = 1;
    }

    for (let i = start; i < this.length; i++) {
      accumValue = callback(accumValue, this[i], i, this);
    }

    return accumValue;
  };
}

module.exports = applyCustomReduce;
