'use strict';

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, ...initialValue) {
    let acc = initialValue[0];
    let startIndex = 0;

    if (initialValue.length === 0) {
      acc = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
};

module.exports = applyCustomReduce;
