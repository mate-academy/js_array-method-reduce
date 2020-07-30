'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev = initialValue;

    for (let i = 0; i < this.length; i++) {
      if (i === 0 && initialValue === undefined) {
        prev = this[0];
      } else {
        prev = callback(prev, this[i], i, this);
      }
    }

    return prev;
  };
}
module.exports = applyCustomReduce;
