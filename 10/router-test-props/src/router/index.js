import {createRouter, createWebHistory, isNavigationFailure} from 'vue-router'

import Home from "@/pages/Home.vue"
import About from "@/pages/About.vue"
import Members from "@/pages/Members.vue"
import Videos from "@/pages/Videos.vue"
import MemberInfo from "@/pages/MemberInfo.vue";
import VideoPlayer from "@/pages/VideoPlayer.vue";
import NotFound from "@/pages/NotFound.vue";

const membersIdGuard = (to, from) => {
    // members/:id 경로는 반드시 이전 경로가
    // /members, /members:id 인 경우만 내비게이션 허용함
    if (from.name !== "members" && from.name !== "members/id") {
        return false
    }
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/about', name: 'about', component: About},
        {path: '/members', name: 'members', component: Members,
            // 명명된 뷰에 여러 컴포넌트를 렌더링할 때
            // 명명된 뷰마다 props 를 동적으로 전달할지 여부를 지정함.
            // components: {
            //     default: Members,
            //     left: MembersLeft,
            //     footer: MembersFooter
            // },
            // props: {
            //     default: true, left: true, footer: false
            // }
        },
        {
            path: '/members/:id', name: 'members/id', component: MemberInfo,
            beforeEnter: membersIdGuard, // 라우트 수준 navigation
            props: true
        },
        {
            path: '/videos', name: 'videos', component: Videos,
            children: [
                {path: ':id', name: 'videos/id', component: VideoPlayer}
            ]
        },
        {path: '/:paths(.*)*', name: "NotFound", component: NotFound}
    ]
})

// 전역 수준 navigation
router.beforeEach((to) => {
  //to.query 에 속성이 존재할 경우 제거된 경로로 재이동
  if(to.query && Object.keys(to.query).length > 0) {
    return { path:to.path, query:{}, params: to.params }
  }
})

// 전역 수준 navigation
router.afterEach((to, from, failure) => {
  if(isNavigationFailure(failure)) {
    console.log("@@ 내비게이션 중단 : ", failure)
  }
})

export default router