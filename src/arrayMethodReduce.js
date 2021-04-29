'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let previous = this[0];
    let index = 1;

    if (initialValue !== undefined) {
      previous = initialValue;
      index = 0;
    }

    for (let i = index; i < this.length; i++) {
      previous = callback(previous, this[i], i, this);
    }

    return previous;
  };
}

module.exports = applyCustomReduce;
