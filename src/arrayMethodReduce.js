'use strict';

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const args = arguments.length;
    let result = args > 1 ? initialValue : this[0];
    const startIndex = args > 1 ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
