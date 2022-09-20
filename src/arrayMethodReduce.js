'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let previousValue = initialValue;

    if (!initialValue) {
      previousValue = this[0];
    }

    if (arguments.length === 2
        && (typeof initialValue === 'undefined' || initialValue === 0)) {
      if (typeof initialValue === 'undefined') {
        previousValue = 'undefined';
      }

      if (initialValue === 0) {
        previousValue = 0;
      }

      for (let i = 0; i < this.length; i++) {
        previousValue = callback(previousValue, this[i], i, this);
      }

      return previousValue;
    }

    for (let i = 1; i < this.length; i++) {
      previousValue = callback(previousValue, this[i], i, this);
    }

    return previousValue;
  };
}

module.exports = applyCustomReduce;
