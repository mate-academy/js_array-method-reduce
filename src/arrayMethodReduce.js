'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(...args) {
    let prevValue = args[1];

    let start = 0;

    if (args.length < 2) {
      start = 1;
      prevValue = this[0];
    }

    for (let i = start; i < this.length; i++) {
      prevValue = args[0](prevValue, this[i], i, this);
    }

    return prevValue;
  };
}

module.exports = applyCustomReduce;
