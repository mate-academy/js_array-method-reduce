'use strict';

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc;

    if (initialValue !== undefined) {
      acc = initialValue;
    } else if (arguments.length > 1) {
      acc = initialValue;
    } else {
      acc = this[0];
    }

    if (acc === this[0]) {
      for (let i = 1; i < this.length; i++) {
        acc = callback(acc, this[i], i, this);
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        acc = callback(acc, this[i], i, this);
      }
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
