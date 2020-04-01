'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accum = 0;
    let startIndex = 0;

    if (this.length === 0 && initialValue === undefined) {
      return new TypeError('Reduce of empty array with no initial value');
    };

    if (this.length === 1 && initialValue === undefined) {
      return this[0];
    };

    if (this.length === 0 && initialValue !== undefined) {
      return initialValue;
    };

    if (initialValue !== undefined) {
      accum = initialValue;
      startIndex = 0;
    } else {
      accum = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      accum = callback(accum, this[i], i, this);
    };

    return accum;
  };
}

module.exports = applyCustomReduce;
