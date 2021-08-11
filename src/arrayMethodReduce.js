'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let previous = initialValue;
    let indexStart = 0;

    if (initialValue === undefined) {
      previous = this[0];
      indexStart = 1;
    }

    for (let i = indexStart; i < this.length; i++) {
      previous = callback(previous, this[i], i, this);
    }

    return previous;
  };
}

module.exports = applyCustomReduce;
