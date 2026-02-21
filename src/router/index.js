import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: '해커스교육 - 메인' }
  },
  {
    path: '/courses/:category?',
    name: 'CourseList',
    component: () => import('@/views/CourseListView.vue'),
    meta: { title: '강의 목록' }
  },
  {
    path: '/course/:id',
    name: 'CourseDetail',
    component: () => import('@/views/CourseDetailView.vue'),
    meta: { title: '강의 상세' },
    props: true
  },
  {
    path: '/enrollment',
    name: 'Enrollment',
    component: () => import('@/views/EnrollmentView.vue'),
    meta: { title: '수강신청', requiresAuth: true }
  },
  {
    path: '/events',
    name: 'EventList',
    component: () => import('@/views/EventListView.vue'),
    meta: { title: '이벤트/혜택' }
  },
  {
    path: '/events/:id',
    name: 'EventDetail',
    component: () => import('@/views/EventDetailView.vue'),
    meta: { title: '이벤트 상세' }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginView.vue'),
    meta: { title: '로그인', guestOnly: true }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('@/views/SignupView.vue'),
    meta: { title: '회원가입', guestOnly: true }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: '페이지를 찾을 수 없습니다' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem('hackers_user')

  if (to.meta.requiresAuth && !isLoggedIn) {
    next({ name: 'Login', query: { redirect: to.fullPath } })
  } else if (to.meta.guestOnly && isLoggedIn) {
    next({ name: 'Home' })
  } else {
    document.title = to.meta.title || '해커스교육'
    next()
  }
})

export default router
