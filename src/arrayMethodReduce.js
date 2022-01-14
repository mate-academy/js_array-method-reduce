'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let initial = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      initial = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      initial = callback(initial, this[i], i, this);
    };

    return initial;
  };
}

module.exports = applyCustomReduce;
