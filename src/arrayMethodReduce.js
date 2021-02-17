'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let lastStepResult = initialValue;
    const startIndex = lastStepResult === this[0] ? 1 : 0;

    for (let i = startIndex; i < this.length; i++) {
      lastStepResult = callback(lastStepResult, this[i], i, this);
    }

    return lastStepResult;
  };
}

module.exports = applyCustomReduce;
