# 원쌤의 Vue.js 퀵스타트
___
## Composition API
### Composition API란?
* 대규모 Vue 애플리케이션에서의 컴포넌트 로직을 효과적으로 구성하고 재사용할 수 있도록 만든 함수 기반의 API
* 왜 필요한가?
  * 컴포넌트 내부에 동일한 논리적 관심사 코드가 분리하여 존재함.
  * 컴포넌트 로직 재사용의 불편함 해소.
### setup 메서드를 이용한 초기화
* data, methods, computed 옵션이 사라짐
* 초기화 작업 수행을 위한 setup() 옵션 메서드를 이용해서 초기화.
* api 생명 주기와 비교할 때 beforeCreate, created 단계에서 생성.
* 요소
  * 반응성 상태(reactivity)을 가진 상태 데이터
  * 계산된 속성(computed property)
  * 메서드
  * 생명주기 훅(Life cycle hook)
  * 객체 형태로 리턴
```javascript
import { ref } from 'vue'

export default {
  name: "Calc",
  setup() {
    const x = ref(10)
    const y = ref(20)
    return { x, y }
  }
}
```
* 컴포넌트 컨텍스트
  * 컨텍스트는 기존 옵션 API에서 this 컨텍스트가 제공하던 정보를 setup() 내부에서 이용하기 위해 사용하는 인자

### 반응성을 가진 상태 데이터
* ref와 reactive를 이용하기
* ref
  * 기본타입(primitive type)의 값을 이용해 반응성을 가진 참조형 데이터를 생성할 때
  * 파라미터 : 초기값을 부여함.
  * 단점 : setup() 옵션 메서드 내부에서는 직접 데이터를 이용하지 못하고 value 속성을 통해서 접근함.
    * ex) x.value
* reactive
  * 객체에 대해 반응성을 가지도록 함
  * setup() 옵션 메소드 내부에서 리턴할 때는 객체 내부의 값을 사용하면 안됨.
    * ex) return { state.x, state.y } (X)

### computed
* 계산형 속성과 동일한 기능
* computed()에 의해서 생성된 계산된 속성은 템플릿에서는 직접 이용 가능
* ```<script>...</script>``` 내부에서 사용할 경우 ```.value```를 사용해야 함.

### watch와 watchEffect
* 옵션 API의 watch 옵션과 동일한 기능
```javascript
watch(data, (current, old) => {
    // 처리하려는 연산 로직
})
```
* 첫번째 인자 : 감시하려는 대상 반응성 데이터, 속성, 계산된 속성을 전달
* 두번째 인자 : 핸들러(handler) 함수
  * current : 변경된 값
  * old : 변경되기 전 값
* ref 혹은 reactive 를 이용한 데이터 객체라도 current와 old는 ```value```에 해당함.
  * current와 old는 객체가 아닌 값이다.
* reactive 사용시 주의사항
  * 객체의 반응성 확인으로 인해 해당 메소드가 2번 실행함.
  * 감시 대상을 getter() 함수로 정의하면 해결됨.
* 다중 값에 대한 감시자 설정도 가능