'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev = this[0];
    let startIndex = 1;

    if (arguments.length === 2) {
      prev = arguments[1] === undefined ? 'undefined' : arguments[1];
      startIndex = 0;
    }

    for (let i = startIndex; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
