'use strict';

function applyCustomReduce() {
  [].__proto__.reduce2 = function(...param) {
    let i = param.length < 2 ? 1 : 0;
    let acum = param.length < 2 ? this[0] : param[1];

    for (; i < this.length; i++) {
      acum = param[0](acum, this[i], i, this);
    }

    return acum;
  };
}
module.exports = applyCustomReduce;
