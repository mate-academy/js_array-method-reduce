'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const start = arguments.length > 1 ? 0 : 1;
    let concatination = arguments.length > 1 ? initialValue : this[0];

    for (let i = start; i < this.length; i++) {
      concatination = callback(concatination, this[i], i, this);
    }

    return concatination;
  };
}

module.exports = applyCustomReduce;
