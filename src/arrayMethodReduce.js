'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(accamulatorFunc, initialValue) {
    const hasInitialValue = arguments.length > 1;
    let accamulator = hasInitialValue ? initialValue : this[0];

    for (let i = hasInitialValue ? 0 : 1; i < this.length; i++) {
      if (i in this) {
        accamulator = accamulatorFunc(accamulator, this[i], i, this);
      }
    }

    return accamulator;
  };
}

module.exports = applyCustomReduce;
