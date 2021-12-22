'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let reducer = (arguments.length === 1) ? this[0] : initialValue;
    const index = (arguments.length === 1) ? 1 : 0;

    for (let i = index; i < this.length; i++) {
      reducer = callback(reducer, this[i], i, this);
    }

    return reducer;
  };
}

module.exports = applyCustomReduce;
