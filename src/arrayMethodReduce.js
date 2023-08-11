'use strict';

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, ...initialValue) {
    let [accum] = initialValue.length ? initialValue : [this[0]];

    let i = accum === this[0] ? 1 : 0;

    for (; i < this.length; i++) {
      accum = callback(accum, this[i], i, this);
    }

    return accum;
  };
}

module.exports = applyCustomReduce;
