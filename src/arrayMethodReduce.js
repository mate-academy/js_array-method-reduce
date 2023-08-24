'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (typeof callback !== 'function') {
      throw new TypeError('Callback must be a function');
    }

    if (this.length === 0 && initialValue === undefined) {
      throw new TypeError('Reduce of empty array with no initial value');
    }

    let accumulator;
    let startIndex;

    if (arguments.length > 1) { // Змінено умову перевірки
      accumulator = initialValue;
      startIndex = 0;
    } else {
      accumulator = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}
module.exports = applyCustomReduce;
