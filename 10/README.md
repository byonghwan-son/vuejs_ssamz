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