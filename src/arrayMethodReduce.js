'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let initial = initialValue;
    let index = 0;

    if (arguments.length < 2) {
      initial = this[0];
      index = 1;
    }

    for (let i = index; i < this.length; i++) {
      initial = callback(initial, this[i], i, this);
    }

    return initial;
  };
}

module.exports = applyCustomReduce;
