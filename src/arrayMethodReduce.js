'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let previousState = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      previousState = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      previousState = callback(previousState, this[i], i, this);
    }

    return previousState;
  };
}

module.exports = applyCustomReduce;
