'use strict';

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acum = initialValue;

    if (arguments.length === 1 && typeof this[0] === 'number') {
      acum = 0;
    } else if (arguments.length === 1 && typeof this[0] === 'string') {
      acum = '';
    }

    for (let i = 0; i < this.length; i++) {
      acum = callback(acum, this[i], i, this);
    }

    return acum;
  };
}

module.exports = applyCustomReduce;
