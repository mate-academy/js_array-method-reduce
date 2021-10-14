/* eslint-disable no-unused-expressions */
'use strict';

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let previous = initialValue;
    let startIndex;

    arguments.length < 2 ? (
      previous = this[0],
      startIndex = 1
    ) : startIndex = 0;

    for (let i = startIndex; i < this.length; i++) {
      previous = callback(previous, this[i], i, this);
    }

    return previous;
  };
}

module.exports = applyCustomReduce;
