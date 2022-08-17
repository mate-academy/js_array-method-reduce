'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const start = (arguments.length === 1) ? 1 : 0;
    let previusValue = (arguments.length === 1) ? this[0] : initialValue;

    for (let i = start; i < this.length; i++) {
      previusValue = callback(previusValue, this[i], i, this);
    }

    return previusValue;
  };
}

module.exports = applyCustomReduce;
