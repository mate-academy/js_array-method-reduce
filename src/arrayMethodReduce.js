'use strict';

/**
 * Implement method Reduce
 */

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let previouse = initialValue;
    let firstNumber = 0;

    if (arguments.length < 2) {
      previouse = this[0];
      firstNumber = 1;
    }

    for (let i = firstNumber; i < this.length; i++) {
      previouse = callback(previouse, this[i], i, this);
    }

    return previouse;
  };
}

module.exports = applyCustomReduce;
