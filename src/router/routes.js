const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requireLogin: true }
    
  },    
  {
    name: 'LoginIn',
    path: '/login-1',
    component: () => import('pages/Login-1.vue')
  }    
]

export default routes
