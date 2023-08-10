'use strict';

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startIndex = 1;
    let accumulator = this[0];

    if (arguments.length > 1) {
      startIndex = 0;
      accumulator = initialValue;
    }

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
