"use strict";

function addContact(name, mobile) {
  var home = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '없음';
  var address = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '없음';
  var email = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '없음';
  var str = "name=".concat(name, ", mobile=").concat(mobile, ", home=").concat(home, ", ") + "address=".concat(address, ", email=").concat(email);
  console.log(str);
}
addContact('홍길동', '010-1234-1234');
addContact('이몽룡', '010-4567-9874', '02-112-2222', '서울');