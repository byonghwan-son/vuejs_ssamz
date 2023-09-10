// 함수를 호출할 때 전달한 객체를 구조분해 할당으로 받아내면서 기본 파라미터까지 지정한 것입니다.

function addContact1({name, phone, email='이메일없음', age=0}) {
    console.log(name, phone, email, age)
}
addContact1({name: '이몽룡', phone: '010-1234-5678'})

function addContact2(contact) {
    if(!contact.email) contact.email = '이메일없음'
    if(!contact.age) contact.age = 0
    let {name, phone, email, age} = contact
    console.log(name, phone, email, age)
}
addContact2({name: '이몽룡', phone: '010-1234-5678'})

function addContact3(name, phone, email='이메일없음', age=0) {
    console.log(name, phone, email, age)
}
addContact3("이몽룡", "010-1234-5678")