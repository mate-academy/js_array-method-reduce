'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let acc = arguments.length > 1 ? initialValue : this[0];

    if (arguments.length >= 2 && initialValue === undefined) {
      acc = 'undefined';
    }

    for (let i = 0; i < this.length; i++) {
      if (acc === this[0]) {
        i = 1;
      }
      acc = callback(acc, this[i], i, this);
    };

    return acc;
  };
}

module.exports = applyCustomReduce;
