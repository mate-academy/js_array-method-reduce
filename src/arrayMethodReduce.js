'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, ...args) {
    let finalValue = args[0] === undefined ? `${args[0]}` : args[0];
    let i = 0;

    if (args.length === 0) {
      finalValue = this[0];
      i = 1;
    }

    for (; i < this.length; i++) {
      finalValue = callback(finalValue, this[i], i, this);
    }

    return finalValue;
  };
}

module.exports = applyCustomReduce;
