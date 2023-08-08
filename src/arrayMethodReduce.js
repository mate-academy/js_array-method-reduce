'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, ...initialValue) {
    if (typeof callback !== 'function') {
      throw new TypeError(
        'missing argument 0 '
        + 'when calling function Array.prototype.reduce'
      );
    }

    let accumulator = initialValue.length ? initialValue[0] : this[0];
    const startIndex = initialValue.length ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
