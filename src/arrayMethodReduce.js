'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, startValue) {
    const items = this;
    let prevValue = startValue;
    let startIndex = 0;

    if (startValue === undefined) {
      prevValue = items[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < items.length; i++) {
      let item = items[i];
      prevValue = callback(prevValue, item, i, items);
    }
    return prevValue;
  };
}

module.exports = applyCustomReduce;
