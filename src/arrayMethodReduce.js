'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let accumelator = initialValue;
    let start = 0;

    if (arguments.length === 1) {
      accumelator = this[0];
      start = 1;
    }

    for (let i = start; i < this.length; i++) {
      accumelator = callback(accumelator, this[i], i, this);
    }

    return accumelator;
  };
}

module.exports = applyCustomReduce;
