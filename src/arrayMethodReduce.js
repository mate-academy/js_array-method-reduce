'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev;
    let startIndex;

    arguments.length < 2 ? prev = this[0] : prev = initialValue;
    arguments.length < 2 ? startIndex = 1 : startIndex = 0;

    for (let i = startIndex; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
}
module.exports = applyCustomReduce;
