# 원쌤의 Vue.js 퀵스타트
---
## vue-router 를 이용한 라우팅
* vue에서 url을 이용한 이동을 가능하게 함

### vue-router 란?
* SPA
  * single page application
  * 화면마다 고유의 식별자(URI-Uniform Resource Identifier)를 기반으로 \
    화면을 렌더링 함.
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
