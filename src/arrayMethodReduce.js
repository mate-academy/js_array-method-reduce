'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startValue = 0;
    if (initialValue === undefined) {
      initialValue = this[0];
      startValue = 1;
    }
    for (let i = startValue; i < this.length; i++) {
      let element = this[i];
      initialValue = callback(initialValue, element, i, this);
    }
    return initialValue;
  };
}

module.exports = applyCustomReduce;
