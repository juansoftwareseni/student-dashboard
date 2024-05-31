import { createRouter, createWebHistory } from 'vue-router'
import LoginLayout from './layouts/LoginLayout.vue'
import DashboardLayout from './layouts/DashboardLayout.vue'
import HomeView from './views/HomeView.vue'
import NotFoundLayout from './layouts/NotFoundLayout.vue'
import StudentsView from './views/StudentsView.vue'
import { useUserStore } from './store/user.js'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: LoginLayout
    },
    {
      path: '',
      component: DashboardLayout,
      name: 'Dashboard',
      children: [
        {
          path: '/',
          component: HomeView,
          name: 'Home'
        },
        {
          path: '/students',
          component: StudentsView,
          name: 'Students'
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundLayout
    }
  ]
})

router.beforeEach((to, from, next) => {
  const { user } = useUserStore()
  const isAuthenticated = Boolean(user)
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else if (to.name === 'Login' && isAuthenticated) next({ name: 'Home' })
  else if (to.name === 'Dashboard' && isAuthenticated) next({ name: 'Home' })
  else next()
})
