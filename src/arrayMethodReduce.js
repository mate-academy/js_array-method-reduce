'use strict';

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc = initialValue !== undefined
      ? initialValue
      : arguments.length > 1 ? initialValue
        : this[0];

    const startIndex = acc === this[0] ? 1 : 0;

    for (let i = startIndex; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
