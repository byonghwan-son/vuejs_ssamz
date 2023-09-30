# 원쌤의 Vue.js 퀵스타트
---
## vue-router 를 이용한 라우팅
* vue에서 url을 이용한 이동을 가능하게 함

### vue-router 란?
* SPA
  * single page application
  * 화면마다 고유의 식별자(URI-Uniform Resource Identifier)를 기반으로 \
    화면을 렌더링 함.
    * URI = URL + URN
  * 요청한 URI 경로에 따라 각각 다른 화면이 렌더링 되도록 도와주는 vue-router 를 이용
    * 중첩된 경로, 뷰를 매핑
    * 컴포넌트 기반의 라우팅 구현
    * 전환 효과(Transition)를 적용
    * 히스토리 모드와 해시 모드
    * 쿼리스트링, 파라미터, 와일드 카드 사용 가능

### vue-router 의 기본 사용법
```javascript
import { createRouter, createWebHistory } from 'vue-router'
// ......
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/members', component: Members },
    { path: '/videos', component: Videos },
  ]
})
```
```javascript
// src/main.js에서 router 객체를 등록
const app = createApp(App)
app.use(router)
app.mount('#app')
```
```javascript
// router 객체의 각 경로별 컴포넌트를 렌터링할 위치를 지정
<template>
  <div class="container">
    <Header />
    <router-view></router-view>
  </div>        
</template>

// 화면 전환을 위한 링크 생성
<router-link to="[이동시킬 URI 경로]">[링크 텍스트]</router-link>
```
### router 객체와 currentRoute 객체
* 컴포넌트에서의 Router 관련 정보 접근

| 구분                      | Options API                              | Composition API                 |
|-------------------------|------------------------------------------|---------------------------------|
| 라우터 객체                  | this.$router                             | const router = useRouter()      |
| 매칭된 라우트 (current Route) | this.$route 또는 this.$router.currentRoute | const currentRoute = useRoute() |

* currentRoute 객체의 주요 속성

| 구분 | 설명                                        |
|-----|-------------------------------------------|
|fullPath| 전체 요청 경로. 쿼리 문자열까지 포함(ex: /about?a=1&b=2) |
|matched| vue-router 객체의 routes 배열의 라우트 중 매칭된 라우트 |
| params | URI 경로에 동적으로 전달되는 파라미터 정보
| path   | 요청 URI 경로 |
| query | 쿼리 문자열 정보 ?a=1&b=2로 요쳥했다면 this.$route.query는 {a:1, b:2}와 같은 객체임 |
| redirectedFrom | 다른 경로에서 리디렉트된 경우 리디렉트시킨 URI 경로 정보 포함|

* 옵션 API : this.$route를 이용해 접근
* Composition API : vue-router가 제공하는 useRoute 함수를 호출하여 리터된 객체를 이용해 접근

### 동적 라우팅
* URI 경로의 일부에 실행에 필요한 파라미터 값이 포함된 URI 경로를 설정함
  * 아래의 예제에서는 :id가 파라미터이다. 
  * ```{ path: '/members/:id', component: MemberInfo },```
  * 받는 쪽 쿼리
  ```javascript
  <template>
    <div>
      {{currentRoute.params.id}}
    </div>
  </template>
  ......
  setup() {
    const currentRoute = useRoute()
    return { currentRoute }  
  }
  ```

### 중첩 라우트
* router-view에 의해 나타나는 컴포턴트가 다시 router-view를 이용해 자식 라우트의 매칭된 컴포넌트를 렌더링 함.
```javascript
{
    path: '/videos', component: Videos,
    children: [
      { path: ':id', component: VideoPlayer }    
    ]       
}
```
### 명명된 라우트와 명명된 뷰
* 명명된 라우트(Named Route)는 라우트 정보에 이름을 부여하는 방법을 제공함.
* 이름이 부여된 라우트는 URI 경로가 아닌 이름을 이용해 경로 전환이 가능함.
 
* query, params 의 표현

| URI 패턴                 | ```<router-link>```의 예                                                                                                   |
|------------------------|--------------------------------------------------------------------------------------------------------------------------|
| ```/members/:id```     | ```<router-link :to="{name:'members/id', params: {id: 1} }">```<br/>.......<br/>```</router-link>```<br/> ex) /members/1 |
| ```/members?a=1&b=2``` | ```<router-link :to="{ name:'members', query: {a:1, b:2}}">```<br/>......<br/>```</router-link>```                       |

#### 명명된 뷰
* <router-view>를 중첩시키지 않고 한꺼번에 화면에 나타낼 경우 사용
```javascript
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/members', components: {
        default: Members, // <router-view></router-view>
        left: MembersLeft, // <router-view name="left"></router-view>
        footer: MembersFooter  // <router-view name="footer"></router-view>
      }
    }  
  ]
})
```
### 프로그램 방식의 라우팅 제어
[Options API 적용]
```javascript
const router = this.$router
```

[Composition API 적용]
```javascript
import { useRouter } from 'vue-router'
......
const router = useRouter()
```
#### 라우터 객체를 다루어 보려면...
[Options API : Created() 생명주기 메서드에서]
```javascript
window.$router = this.$router
```

[Composition API: Setup() 메서드에서]
```javascript
import { useRouter } from 'vue-router'
......
setup() {
  window.$router = useRouter()  
}
```
* 라우터 객체의 주요 메서드

| 메서드                           | 설명                                                        |
|-------------------------------|-----------------------------------------------------------|
| addRoute(parentRouter, route) | 실행시에 동적으로 부모 라우트에 새로운 라우트 정보를 추가                          |
| removeRoute(name)             | 실행시에 동적으로 라우트 정보를 삭제                                      |
| go(n)                         | n만큼 브라우저 히스토리를 이용해 이둉.                                    |
| back()                        | go(-1)과 동일                                                |
| forward()                     | go(1)과 동일                                                 |
| **push(to)**                  | 지정된 경로로 이동하고 브라우저 히스토리에 이동경로 추가                           |
| **replace(to)**               | 지정된 경로로 이동하지만 브라우저 히스토리에 새롭게 추가하지 않고 현재의 히스토리를 새로운 경로로 교체 |
| getRoutes()                   | 현재 설정된 라우트 정보를 조회                                         |

[router 객체 생성 직후에...]
```javascript
import { defineAsyncComponent } from 'vue'
...... (생략)
const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...... (생략)  
  ]
})

router.addRoute({
  path: '/repeat', name: 'repeat',
  component: defineAsyncComponent(() => import('@/pages/Repeat'))
})

export default router;
```
* push메서드 예제
```javascript
// 문자열 직접 전달
router.push('/home')
// 객체 정보로 전달
router.push({path:'/about'})
// 명명된 라우트 사용
router.push({name: 'members/id', params: {id : 1}})
// 쿼리 문자열 전달 ex) /board?pageno=1&pagesize=5
router.push({ path: '/board', query: { pageno: 1, pagesize: 5 }})
```

#### 내비게이션 가드
* 라우팅이 일어날 때 프로그래밍 방식으로 내비게이션을 취소하거나 다른 경로로 리디렉션시키도록 하여 내비게이션을 안전하게 보호하는 기능을 수행함.
* 인증 토큰을 가졌을 경우에만 해당 페이지로 이동시키기
* 라우트 하는 경로(path)가 바뀔 때 반응함. 파라미터나 쿼리 문자열 변경으로는 발생하지 않음.
* 종류 : 전역 수준, 라우트 수준, 컴포넌트 수준
##### 전역 수준 내비게이션 가드
  * 라우트 객체를 이용해 등록 (createRouter, useRouter() 혹은 this.$router)
```javascript
import { createRouter, createWebHistory, isNavigationFailure } from 'vue-router'
... 
const router = createRouter({ ... })

router.beforeEach((to, from) => {
  // 내비게이션을 취소하려면 명시적으로 false를 리턴합니다.
  return false
})

router.afterEach((to, from, failure) => {
  // 내비게이션을 실패했을 때 failure 정보를 이용해 실패 처리를 할 수 있음.
  if (isNavigationFailure(failure)) {
      
  }
})
```
  * RouteLocationNormalized 객체 : 경로 정보를 가지고 있음
    * matched 추가 속성에 대한 내용 확인 필요 : 라우트 정보와 매칭하는 배열 리스트(?)
  * beforeEach(method)의 내부 메서드의 리턴 값
    * 정상완료 : 리턴 없음 or true
    * 최소(Abort) : false
    * 다른 경로로 이동
      * return '/videos/1'
      * return {path: '/'}
      * return {name: 'members/id', params:{id:2}}
      * Error객체를 throw하면 router.onError()에 등록된 콜백함수가 호출됨
##### 라우트 수준의 내비게이션 가드
```javascript
// 단일 메소드 지정
const router = createRouter({
  ...
  routes: [
    ...
    {
      path: '/members/:id', name: '/members/id', component: MemberInfo,
      beforeEnter: (to, from) => {
        // false를 리턴하면 내비게이션이 중단됨.  
      }
    }    
  ],
  ...
})

// 복수 메서드 지정
const guard1 = (to, from) => {}
const guard2 = (to, from) => {}

const router = createRouter({
  ...
  routes: [
  ...
    {
      path: '/members/:id', name: '/members/id', component: MemberInfo,
      beforeEnter: [guard1, guard2],
    }
  ],
  ...
})
```
##### 컴포넌트 수준의 내비게이션 가드
| 내비게이션 가드          | 설명                                                                        |
|-------------------|---------------------------------------------------------------------------|
| beforeRouteEnter  | 컴포넌트 렌더링 경로 확정되기 전 호출. <br/> Option API를 이용하는 경우 인스턴스 미생성됨.<br/>this 이용불가 |
| beforeRouteUpdate | 컴포넌트 렌더링하는 경로가 바뀔 때 호출.<br/> 기존 컴포넌트는 재사용함.                                    |
| beforeRouteLeave | 현재의 경로에서 다른 경로로 벗어날 때 호출                                                  |
```javascript
export default {
  beforeRouteEnter(to, from) { },
  beforeRouteUpdate(to, from) { },
  beforeRouteLeave(to, from) { }
}
```
* API별 내비게이션 가드 사용 비교

| Option API       | Composition API |
|------------------|-|
| beforeRouteEnter | setup() 메서드 내부의 코드로 대체 |
| beforeRouteUpdate | onBeforeRouteUpdate |
| beforeRouteLeave | onBeforeRouteLeave |
---
* **전체 내비게이션 가드 실행 순서**
  * 내비게이션 시작
  * 비활성화 컴포넌트 beforeRouteLeave 가드 호출
  * 전역 수준의 beforeEach 가드 호출
  * 재사용 컴포넌트의 beforeRouteUpdate 가드 호출
  * 라우트 정보 수준의 beforeEnter 가드 호출
  * 비동기 라우트 컴포넌트를 분석하고 로딩
  * 활성화된 컴포넌트의 beforeRouteEnter 가드를 호출
  * 전역 수준의 beforeResolve 가드를 호출
  * 내비게이션의 수행 및 확정
  * 전역 수준의 afterEach 가드를 호출
  * DOM이 업데이트됨
  * 인스턴스에서 beforeRouteEnter 가드에 인자로 전달된 next 콜백 함수를 호출

#### 내비게이션 가드 적용하기
* 각 가드 범위별 적용 예제
  * 전역 수준 : 요청 경로에 혹시 라도 쿼리 스트링 파라미터가 있으면 모두 제거하는 기눙 구현
  * 라우트 수준 : 이전 경로가 /members, /members/:id 인 경우만 member/:id 경로로 이동하도록 구현
  * 컴포넌트 수준 : /videos/:id 경로에 의해 마운트, 렌더링하는 /videoPlayer 컴포넌트에서   
  이전, 다음 버튼을 클릭하면 플레이할 영상을 onBeforeRouteUpdate()를 사용하도록 코드 변경

### 히스토리 모드와 404라우트
#### 히스토리 모드
  * 라우팅 모드라고도 하며 URI 경로와 동기화 하여 UI를 나타내기 위해 어떤 정보를 이용할 것인지 지정하는 방법을 제공
  * 해시 모드(Hash Mode), HTML 5 모드, 메모리 모드

[HTML5 모드 - 기존 처리 방법]
* Vue 애플리케이션을 호스팅하는 웹서버에 **폴백 페이지(Fallback UI)** 가 설정되어 있어야 함.
* 테스트 환경의 서버에는 Fallback UI가 설정되어 있음.
```javascript
import { createRouter, createWebHistory } from 'vue-router'
...
const router = createRouter({
  history: createWebHistory(),
  // 생략
})
```

[Hash 모드 - 기존 처리 방법]
* /#/about 과 같이 # 뒤에 따르는 문자열을 이용하는 방법
```javascript
import { createRouter, createWebHashHistory } from 'vue-router'
...
const router = createRouter({
  history: createWebHashHistory(),
  // 생략
})
```

[Fallback UI 서버 구성 예제](https://router.vuejs-korea.org/ko/guide/essentials/history-mode.html#%EC%84%9C%EB%B2%84-%EA%B5%AC%EC%84%B1-%EC%98%88%EC%A0%9C)

#### 404 라우트
* 경로가 매칭되는 것이 없을 때 보여줄 라우트
* 순서가 중요함. (가장 마지막 라우트도 등록해야 함.)
* 