'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const argsInArr = arguments.length > 1;
    const start = argsInArr ? 0 : 1;
    let previous = argsInArr ? initialValue : this[0];

    for (let i = start; i < this.length; i++) {
      previous = callback(previous, this[i], i, this);
    }

    return previous;
  };
}

module.exports = applyCustomReduce;
