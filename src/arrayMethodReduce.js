'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let initial = initialValue;

    for (let i = 0; i < this.length; i++) {
      initial = (initial !== undefined)
        ? callback(initial, this[i], i, this)
        : this[i];
    }

    return initial;
  };
};

module.exports = applyCustomReduce;
