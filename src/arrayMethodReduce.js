'use strict';

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let previousValue = initialValue;
    let initialIndex = 0;

    if (arguments.length < 2) {
      previousValue = this[0];
      initialIndex = 1;
    }

    for (let i = initialIndex; i < this.length; i++) {
      previousValue = callback(previousValue, this[i], i, this);
    }

    return previousValue;
  };
}

module.exports = applyCustomReduce;
