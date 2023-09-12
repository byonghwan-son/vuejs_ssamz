let obj1 = { name: "박문수", age: 29 }
let obj2 = obj1 // 얕은 복사(shallow copy)
let obj3 = { ...obj1 }
let obj4 = { ...obj1, email: 'stein712@kakao.com' }

obj2.age = 19
console.log(obj1)
console.log(obj2)
console.log(obj3)
console.log(obj1 == obj2)
console.log(obj1 == obj3)

let arr1 = [100, 200, 300]
let arr2 = ['hello', ...arr1, 'world']
console.log(arr1)
console.log(arr2)
