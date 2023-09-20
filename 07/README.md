# 원쌤의 Vue.js 퀵스타트
___
## 단일 파일 컴퍼넌트를 위한 Vue 애플리케이션 개발
### 프로젝트 설정 도구
#### Vue CLI 도구
* WebPack 기반의 Vue 공식 프로젝트 설정 도구
```cli
npx @vue/cli create [프로젝트명]
cd [프로젝트명]
npm run serve
```
* 최근에는 vite 기반의 create-vue 도구를 사용할 것을 권장
#### Vite 기반의 도구
* Evan You가 Go 언어로 만들어진 도구
* 기존보다 10배 빠른 속도
* Native ESM
* Vite가 실행하는 개발 서버는 브라우저가 요청하는 모듈을 전송해 주고 모듈 번들링 기능을 브라우저가 수행함
```
// vite를 직접 이용하여 프로젝트 생성
npm init vite [프로젝트명] -- --template vue

// create-vue 도구 사용
// 프로젝트명을 비롯한 여러 단계의 입력이 필요함
// 프로젝트명을 제외한 나머지는 일단 기본값으로 생성함.
npm init vue@latest
```
* App.vue
```vue
// 디렉티브와 보간법을 사용해서 컴포넌트 렌더링 템플릿 작성
* <template />

// Vue 컴포넌트 내부의 옵션을 정의
* <script />

// 스타일 지정. CSS, Saas, Less도 사용 가능
// scoped 지정할 경우 컴포넌트간에 충돌 방지
* <style />
```
* 전역 컴포넌트
  * 여러 화면, 컴포넌트에서 공통적으로 자주 사용하는 컴포넌트일 때로 한정
* 전역보다는 지역으로...
### 컴포넌트의 조합
* 부모-자식 관계 (트리구조)간의 정보 전달은 **속성**과 **이벤트**
* **속성**(**Props**)은 부모→자식 정보 전달
* **이벤트 발신**(**emit**)는 자식→부모 정보 전달
  * 자식 컴포넌트가 사용자 정의 이벤트 생성 후 이벤트 발생 → 부모컴포넌트가 이벤트 핸들러 메소드 호출
### 속성 (Props)
* 자식 컴포넌트는 props 옵션으로 속성을 정의하고 부모 컴포넌트는 v-bind 디렉티브를 이용해 자식 컴포넌트의 속성에 정보를 전달.
* 속성으로 전달받는 데이터는 변경할 수 없는 읽기 전용이다.
* 객체나 배열은 수정이 가능하지만 권장하지 않음. 어디에서 데이터가 변경되었는지 추적이 어려움.
#### 속성의 유효성 검증
```javascript
export default {
  ......
  props: {
    속성명1 : 타입명,
    속성명2 : [타입명1, 타입명2],
    속성명3 : {
      type: 타입명,
      required : [true/false, 기본값:false],
      default: [기본값 또는 기본값을 리턴하는 함수, 기본값:undefined]
    },
    ......
  }   
}
```
* 타입으로 사용가능한 생성자 함수들
  * String, Number, Boolean, Array
  * Object, Date, Function, Symbol
### 사용자 정의 이벤트
#### 사용자 정의 이벤트를 이용한 정보 전달
* 자식 컴포넌트는 이벤트를 발산(emit events)하고 부모 컴포넌트는 자식 컴포넌트가 발신한 이벤트를 ***v-on 디렉티브***를 이용해서 수신함.

* [자식 컴포넌트에서]
```javascript
this.$emit('event-name', eventArgs1, eventArgs2, ...)
```
[부모 컴포넌트에서]
```javascript
<child-component @event-name="handlerMethod" />

mothods: {
  handlerMethod(eventArgs1, eventArgs2, ...) {
    // 전달받은 인자(Argument)로 처리할 코드 작성
  }
}
```
* 직계 부모에게만 적용됨
* 계층 구조가 복잡한 경우 중간에 거쳐가는 컴포넌트에서 이벤트 정보를 받아서 해당 컴포넌트의 부모로 전달해야 함.
#### 이벤트 유효성 검증
```javascript
const Component = {
  ......
  emits: ["이벤트명1", "이벤트명2"]
  ......
}
```
또는
```javascript
const Component = {
  ......
  emits: {
    이벤트명1 : (e) => {
      // true가 리턴되면 유효
      // false가 리턴되면 유효하지 않음
    },
    // 유효성 검사 하지 않음
    이벤트명2 : null
  }
  ......
}
```
### 이벤트 에미터 사용
* 하나의 공유 이벤트를 만들어 두고 이벤트 정보가 에미터로 흘러가도록 하는 방법
* [참조 문서](https://github.com/developit/mitt)
* 