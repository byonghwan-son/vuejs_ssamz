"use strict";

var obj = {
  result: 0
};
obj.add = function (x, y) {
  this.result = x + y;
};
var add2 = obj.add;
console.log(add2 == obj.add);
add2(3, 4);
console.log(obj);
console.log(result);