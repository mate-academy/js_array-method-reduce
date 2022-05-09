'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let previous = 0;
    let adding = initialValue;

    if (arguments.length === 1) {
      previous = 1;
      adding = this[0];
    }

    for (let i = previous; i < this.length; i++) {
      adding = callback(adding, this[i], i, this);
    }

    return adding;
  };
}

module.exports = applyCustomReduce;
