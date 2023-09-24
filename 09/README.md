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
