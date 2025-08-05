import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // Main routes
  {
    path: '/',
    component: () => import('../views/Dashboard.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: {
      title: 'This Dashboard',
    },
  },
  {
    path: '/tasks',
    component: () => import('../views/Tasks.vue'),
    meta: {
      title: 'This Tasks',
    },
  },
  {
    path: '/users',
    component: () => import('../views/Users.vue'),
  },
  
  // Component routes
  {
    path: '/forms',
    component: () => import('../views/Forms.vue'),
  },
  {
    path: '/tables',
    component: () => import('../views/Tables.vue'),
  },
  {
    path: '/cards',
    component: () => import('../views/Cards.vue'),
  },
  {
    path: '/charts',
    component: () => import('../views/Charts.vue'),
  },
  {
    path: '/buttons',
    component: () => import('../views/Buttons.vue'),
  },
  {
    path: '/modals',
    component: () => import('../views/Modals.vue'),
  },
  {
    path: '/alerts',
    component: () => import('../views/Alerts.vue'),
  },
  {
    path: '/badges',
    component: () => import('../views/Alerts.vue'),
  },
  {
    path: '/pagination',
    component: () => import('../views/Pagination.vue'),
  },
  {
    path: '/tabs',
    component: () => import('../views/Tabs.vue'),
  },
  {
    path: '/accordion',
    component: () => import('../views/Accordion.vue'),
  },
  {
    path: '/dropdowns',
    component: () => import('../views/Dropdowns.vue'),
  },
  {
    path: '/loaders',
    component: () => import('../views/Loaders.vue'),
  },
  {
    path: '/tooltips',
    component: () => import('../views/Tooltips.vue'),
  },
  {
    path: '/empty-states',
    component: () => import('../views/EmptyStates.vue'),
  },
  
  // Auth routes
  {
    path: '/login',
    component: () => import('../views/auth/Login.vue'),
  },
  {
    path: '/register',
    component: () => import('../views/auth/Register.vue'),
  },
  {
    path: '/logout',
    // component: () => import('../views/auth/Logout.vue'),
    //do remove localStorage token and redirect to login
    beforeEnter: (to, from, next) => {
      localStorage.removeItem('token');
      next('/login');
    },
  },
  
  // 404 route
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
      document.title = to.meta.title || 'Admin Dashboard'
      console.log(to.meta.title)
    next()
})



export default router