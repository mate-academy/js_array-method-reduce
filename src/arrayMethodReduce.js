'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const areBothArgumentPassed = arguments.length === 2;
    let total = this[0];

    if (typeof initialValue === 'number') {
      total = initialValue;
    } else if (areBothArgumentPassed) {
      total = initialValue + '';
    }

    const startValue = areBothArgumentPassed ? 0 : 1;

    for (let i = startValue; i < this.length; i++) {
      total = callback(total, this[i], i, this);
    }

    return total;
  };
}

module.exports = applyCustomReduce;
