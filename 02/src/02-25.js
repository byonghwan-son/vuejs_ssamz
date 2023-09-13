let arr = [10, 20, 30]

const proxy = new Proxy(arr, {
    get(target, key, receiver) {
        console.log("## get " + key)
        if(!target[key]) throw new Error(`존재하지 않는 속성(${key}) 입니다.`)
        return target[key]
    },
    set(target, key, newValue) {
        console.log("## set " + key)
        if(!target[key]) throw new Error(`존재하지 않는 속성(${key}) 입니다.`)
        target[key] = newValue
    }
})

proxy[1] = 99