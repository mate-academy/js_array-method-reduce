'use strict';

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startValue = initialValue;

    if (initialValue === undefined && arguments.length < 2) {
      startValue = (typeof this[0] === 'number') ? 0 : '';
    }

    for (let i = 0; i < this.length; i++) {
      startValue = (callback(startValue, this[i], i, this));
    }

    return startValue;
  };
};

module.exports = applyCustomReduce;
