'use strict';

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let sum = '';

    if (initialValue) {
      sum = initialValue;
    };

    for (let i = 0; i < 1; i++) {
      sum = callback(sum, this[i], i, this);
    };

    if (Number.isInteger(Number(sum))) {
      sum = Number(sum);
    };

    for (let i = 1; i < this.length; i++) {
      sum = callback(sum, this[i], i, this);
    };

    return sum;
  };
};

module.exports = applyCustomReduce;
