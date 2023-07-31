'use strict';

/**
 * Implement method Reduce
 */

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let value = (arguments.length === 2) ? initialValue : this[0];

    for (let i = 2 - arguments.length; i < this.length; i++) {
      value = callback(value, this[i], i, this);
    };

    return value;
  };
}

module.exports = applyCustomReduce;
