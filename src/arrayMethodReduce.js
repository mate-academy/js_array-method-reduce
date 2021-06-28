'use strict';

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let previous = initialValue;
    let startindex = 0;

    if (arguments.length < 2) {
      previous = this[0];
      startindex = 1;
    }

    for (let i = startindex; i < this.length; i++) {
      previous = callback(previous, this[i], i, this);
    }

    return previous;
  };
}

module.exports = applyCustomReduce;
