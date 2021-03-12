'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev = initialValue;
    let startIndex = 0;

    if (this.length === 0) {
      return initialValue;
    }

    // if (typeof initialValue === 'string') {
    //   prev = this[0];
    //   startIndex = 1;
    // } else {}

    if (prev === undefined) {
      prev = this[0];
      startIndex = 1;
    }

    // if (this.length < 2) {
    //   prev = this[0];
    //   startIndex = 1;
    // }

    for (let i = startIndex; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
