'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let add = initialValue;
    let startInd = 0;

    if (arguments.length < 2) {
      add = this[0];
      startInd = 1;
    }

    for (let i = startInd; i < this.length; i++) {
      add = callback(add, this[i], i, this);
    }

    return add;
  };
}

module.exports = applyCustomReduce;
