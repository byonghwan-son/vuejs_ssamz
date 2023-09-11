/*
Promise 객체의 생성
const p = new Promise((resolve, reject) =>  {
    // 비동기 작업 수행
    // 이 내부에서 resolve(result) 함수를 호출하면 then 에 등록해 둔 함수가 호출됨
    // reject(error)가 호출되거나 Error가 발생되면 catch에 등록해 둔 함수가 호출됨.
});

p.then((result) => {

})
.catch((error) => {

})
 */
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        var num = Math.random()
        if(num >= 0.8) {
            reject("생성된 숫자가 0.8 이상임 - " + num)
        }
        resolve(num)
    }, 2000)
})

p.then((result) => {
    console.log("처리 결과 : " + result)
})
.catch((error) => {
    console.log("오류 : " + error)
})

console.log("## Promise 객체 생성 !")