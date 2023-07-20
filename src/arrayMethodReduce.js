'use strict';

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc = arguments.length > 1 ? initialValue : this[0];

    for (let i = (arguments.length > 1 ? 0 : 1); i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
