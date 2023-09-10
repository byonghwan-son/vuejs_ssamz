let add = function(x, y) {
    this.result = x + y
}

const obj = {}
// 1. apply() 사용
// add.apply(obj, [3, 4])
// 2. call() 사용
// add.call(obj, 3, 4)
// 3. bind() 사용
add = add.bind(obj)
add(3, 4)

console.log(obj)