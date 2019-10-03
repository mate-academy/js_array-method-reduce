'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  Array.prototype.reduce2 = function(callback, initialValue) {
    let reduceResults = arguments.length < 2 ? this[0] : initialValue;
    let i = arguments.length < 2 ? 1 : 0;

    for (i; i < this.length; i++) {
      reduceResults = callback(reduceResults, this[i], i, this);
    }
    return reduceResults;
  };
}

module.exports = applyCustomReduce;
