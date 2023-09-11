"use strict";

// 화살표 함수는 함수가 정의되는 유효범위(scope)의 this를 
// 자신의 유효범위의 this로 연결합니다.
// 따라서 bind(), apply(), call()과 같은 함수를 사용하지 않아도 됩니다.
var obj = {
  result: 0
};
obj.add = function (x, y) {
  var _this = this;
  var inner = function inner() {
    _this.result = x + y;
  };
  inner();
};
obj.add(3, 4);
console.log(obj);