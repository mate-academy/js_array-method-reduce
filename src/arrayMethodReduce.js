'use strict';

/**
 * Implement method Reduce
 */
// const callback = (prev, item, i, arr) {

// }

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev = initialValue;

    if (arguments.length < 2) {
      prev = this[0];

      for (let i = 1; i < this.length; i++) {
        prev = callback(prev, this[i], i, this);
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        prev = callback(prev, this[i], i, this);
      }
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
