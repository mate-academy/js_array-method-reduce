'use strict';

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let sum = initialValue;
    let indexFirst = 0;

    if (arguments.length < 2) {
      sum = this[0];
      indexFirst = 1;
    }

    for (let i = indexFirst; i < this.length; i++) {
      sum = callback(sum, this[i], i, this);
    }

    return sum;
  };
}

module.exports = applyCustomReduce;
