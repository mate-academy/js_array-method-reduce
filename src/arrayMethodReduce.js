'use strict';

/**
 * Implement method Reduce
 */

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here

    let result;

    const forCycle = (variable) => {
      for (let i = variable; i < this.length; i++) {
        result = callback(result, this[i], i, this);
      }
    };

    if (initialValue !== undefined) {
      result = initialValue;
      forCycle(0);
    } else if (
      initialValue === undefined
      && arguments.length >= 2
    ) {
      result = `undefined`;
      forCycle(0);
    } else {
      result = this[0];
      forCycle(1);
    }

    return result;
  };
}
applyCustomReduce();

module.exports = applyCustomReduce;
