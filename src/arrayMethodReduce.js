'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let precedent = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      precedent = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      precedent = callback(precedent, this[i], i, this);
    }

    return precedent;
  };
}

module.exports = applyCustomReduce;
