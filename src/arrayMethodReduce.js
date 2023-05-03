'use strict';

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator;
    let start;

    if (arguments.length >= 2) {
      accumulator = initialValue;
      start = 0;
    } else {
      accumulator = this[0];
      start = 1;
    }

    for (let i = start; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
