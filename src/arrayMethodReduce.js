'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let previous = initialValue;
    let index = 0;

    if (arguments.length === 1) {
      previous = this[0];
      index = 1;
    }

    for (let i = index; i < this.length; i++) {
      previous = callback(previous, this[i], i, this);
    }

    return previous;
  };
}

module.exports = applyCustomReduce;
