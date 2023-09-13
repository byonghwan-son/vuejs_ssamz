let obj = { name: "홍길동", age: 20 }
const proxy = new Proxy(obj, {
    get(target, key) {
        console.log("## get " + key)
        if(!target[key]) throw new Error(`존재하지 않는 속성(${key}) 입니다.`)
        return target[key]
    },
    set(target, key, value) {
        console.log("## set " + key)
        if(!target[key]) throw new Error(`존재하지 않는 속성(${key}) 입니다.`)
        target[key] = value
    },
    has(target, p) {
    },
    apply(target, thisArg, argArray) {
    },
    construct(target, argArray, newTarget) {
    },
    defineProperty(target, property, attributes) {
    },
    deleteProperty(target, p) {
    },
    getOwnPropertyDescriptor(target, p) {
    },
    getPrototypeOf(target) {
    },
    isExtensible(target) {
    },
    ownKeys(target) {
    },
    preventExtensions(target) {
    },
    setPrototypeOf(target, v) {
    }
})
console.log(proxy.name)     // 읽기 작업 get 호출
proxy.name = '이몽룡'        // 쓰기 작업 set 호출
proxy.age = 30              // 쓰기 작업 set 호출