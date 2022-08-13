'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let rezult = initialValue;
    let indexBegin = 0;

    if (arguments.length < 2) {
      indexBegin = 1;
      rezult = this[0];
    }

    for (let i = indexBegin; i < this.length; i++) {
      rezult = callback(rezult, this[i], i, this);
    }

    return rezult;
  };
}

module.exports = applyCustomReduce;
