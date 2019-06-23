'use strict';
/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let firstItem = 0;
    let firstIndex = 0;
    if (arguments.length < 2) {
      firstItem = this[0];
      firstIndex = 1;
    } else {
      firstItem = initialValue;
      firstIndex = 0;
    }
    for (let i = firstIndex; i < this.length; i++) {
      firstItem = callback(firstItem, this[i], i, this);
    }
    return firstItem;
  };
}
module.exports = applyCustomReduce;