'use strict';

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev = this[0];
    let startIndex = 1;

    if (arguments.length > 1) {
      prev = initialValue;
      startIndex = 0;
    }

    for (let i = startIndex; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
