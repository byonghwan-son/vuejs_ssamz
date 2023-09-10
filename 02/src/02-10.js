// 메서드, 함수가 호출될 때마다 현재 호출중인 메서드를 보유한 객체가
// this로 연결됩니다. 만일 현재 호출 중인 메서드를 보유한 객체가 없다면
// 전역 객체(Global Object : 브라우저 환경에서는 window 객체입니다.)가 연결됩니다.
const obj = {result : 0}
obj.add = function (x, y) {
    this.result = x + y
}

obj.add(3, 4)
console.log(obj)