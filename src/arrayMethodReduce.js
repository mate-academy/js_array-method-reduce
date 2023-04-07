'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const callbackFunction = callback;
    const accumulator = arguments.length < 2
      ? this[0]
      : initialValue;
    let reducedValue = accumulator;

    const indexStart = arguments.length < 2
      ? 1
      : 0;

    for (let i = indexStart; i < this.length; i++) {
      if (indexStart === i) {
        reducedValue = callbackFunction(accumulator, this[i], i, this);
      } else {
        reducedValue = callbackFunction(reducedValue, this[i], i, this);
      }
    }

    return reducedValue;
  };
}

module.exports = applyCustomReduce;
