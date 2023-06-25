'use strict';

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const checkArgLength = arguments.length === 2;
    let accum = checkArgLength ? initialValue : this[0];
    const start = checkArgLength ? 0 : 1;

    for (let i = start; i < this.length; i++) {
      accum = callback(accum, this[i], i, this);
    }

    return accum;
  };
}

module.exports = applyCustomReduce;
