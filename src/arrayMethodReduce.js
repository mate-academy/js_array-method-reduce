'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumutator = initialValue;
    let start = 0;

    if (arguments.length < 2) {
      accumutator = this[0];
      start = 1;
    }

    for (let i = start; i < this.length; i++) {
      accumutator = callback(accumutator, this[i], i, this);
    }

    return accumutator;
  };
}

module.exports = applyCustomReduce;
